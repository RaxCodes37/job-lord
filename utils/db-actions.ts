"use server";

import { eq, sql } from "drizzle-orm";
import { db } from "..";
import { jobPostTable, user } from "@/schema";
import { JobPost } from "./interfaces";

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
