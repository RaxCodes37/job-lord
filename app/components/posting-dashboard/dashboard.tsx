"use client";

import { useEffect, useState } from "react";
import YourPostsDisplay from "./created-post-display";
import PostingNavBar from "./posting-navbar";
import { JobPost } from "@/utils/interfaces";
import { getUserPosts } from "@/utils/db-actions";

interface Props {
  userId: string;
}

export default function PostingDashboardClient({ userId }: Props) {
  const [yourPosts, setYourPosts] = useState<JobPost[]>([]);

  useEffect(() => {
    const getUserPostsFunction = async () => {
      setYourPosts(await getUserPosts(userId));
    };
    getUserPostsFunction();
  }, [userId]);

  return (
    <div className="flex flex-col items-center">
      <PostingNavBar userId={userId} />

      <YourPostsDisplay yourPosts={yourPosts} />
    </div>
  );
}
