"use server";

import { eq, sql } from "drizzle-orm";
import { db } from "..";
import { jobPostTable } from "@/schema";
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
