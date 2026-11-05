"use server";

import { eq, sql } from "drizzle-orm";
import { db } from "..";
import { jobApplicationsTable, jobPostTable, user } from "@/schema";
import { getSession } from "@/lib/auth";
import { JobApplication, JobPost } from "./interfaces";

export const searchJobs = async (jobSearched: string) => {
  const results = await db
    .select()
    .from(jobPostTable)
    .where(
      sql`to_tsvector('english', ${jobPostTable.postTitle}) @@ websearch_to_tsquery('english', ${jobSearched})`,
    );

  return results as JobPost[];
};

export const getAllJobs = async () => {
  const results = await db.select().from(jobPostTable);
  return results as JobPost[];
};

export const getSpecificJobInfo = async (postId: string) => {
  const jobInfo = await db
    .select()
    .from(jobPostTable)
    .where(eq(jobPostTable.postId, postId));

  return jobInfo as JobPost[];
};

export const postApplication = async (
  applicantName: string,
  applicantId: string,
  applicantEmail: string,
  applicantMessage: string,
  postId: string,
) => {
  await db.insert(jobApplicationsTable).values({
    applicantName,
    applicantId,
    applicantEmail,
    applicantMessage,
    postAppliedFor: postId,
  });
};

export const getPostApplications = async (postId: string) => {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be signed in to view applications.");
  }

  const post = await db
    .select({ postCreator: jobPostTable.postCreator })
    .from(jobPostTable)
    .where(eq(jobPostTable.postId, postId));

  if (post[0]?.postCreator !== session.user.id) {
    throw new Error("You can only view applications for your own posts.");
  }

  const applications = await db
    .select()
    .from(jobApplicationsTable)
    .where(eq(jobApplicationsTable.postAppliedFor, postId));

  return applications as JobApplication[];
};

export const changeAccountMode = async (userId: string) => {
  const mode = await db
    .select({ poster: user.poster })
    .from(user)
    .where(eq(user.id, userId));

  if (mode[0].poster === true) {
    await db
      .update(user)
      .set({
        poster: false,
      })
      .where(eq(user.id, userId));
  } else {
    await db
      .update(user)
      .set({
        poster: true,
      })
      .where(eq(user.id, userId));
  }
};

export const getAccountMode = async (userId: string) => {
  const mode = await db
    .select({ poster: user.poster })
    .from(user)
    .where(eq(user.id, userId));

  return mode[0].poster;
};

export const postJob = async (
  posterId: string,
  jobTitle: string,
  jobDesc: string,
  company: string,
) => {
  const accountStatus = await db
    .select({ poster: user.poster })
    .from(user)
    .where(eq(user.id, posterId));

  if (accountStatus[0].poster === true) {
    await db.insert(jobPostTable).values({
      postCreator: posterId,
      postTitle: jobTitle,
      postDescription: jobDesc,
      company,
    });
  } else {
    return;
  }
};

export const getUserPosts = async (userId: string) => {
  const posts = await db
    .select()
    .from(jobPostTable)
    .where(eq(jobPostTable.postCreator, userId));

  return posts as JobPost[];
};

export const editPost = async (
  postId: string,
  jobTitle: string,
  jobDesc: string,
) => {
  await db
    .update(jobPostTable)
    .set({
      postTitle: jobTitle,
      postDescription: jobDesc,
    })
    .where(eq(jobPostTable.postId, postId));
};

export const deletePost = async (postId: string) => {
  await db.delete(jobPostTable).where(eq(jobPostTable.postId, postId));
};
