"use server";

import { sql } from "drizzle-orm";
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
