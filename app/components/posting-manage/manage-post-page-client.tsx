"use client";

import { editPost, getSpecificJobInfo } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import UserSettingsComponent from "../dashboard/nav-bar-components/user-settings";
import ManagePostDisplay from "./manage-post";

export default function PostManagementPageClient({
  postId,
}: {
  postId: string;
}) {
  const [post, setPost] = useState<JobPost[]>([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  useEffect(() => {
    const getPostInfoFunction = async () => {
      const postInfo = await getSpecificJobInfo(postId);
      setPost(postInfo);
      setPostTitle(postInfo[0]?.postTitle ?? "");
      setPostDescription(postInfo[0]?.postDescription ?? "");
    };
    getPostInfoFunction();
  }, [postId]);

  const editPostFunction = async (
    postId: string,
    postTitle: string,
    postDescription: string,
  ) => {
    try {
      await editPost(postId, postTitle, postDescription);
    } catch (error) {
      console.error("error editing post", error);
    }
  };

  return (
    <div className="flex flex-col items-center text-white">
      <UserSettingsComponent />
      <ManagePostDisplay
        post={post}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postDescription={postDescription}
        setPostDescription={setPostDescription}
        editPostFunction={editPostFunction}
      />
    </div>
  );
}
