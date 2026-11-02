import PostManagementPageClient from "@/app/components/posting-manage/manage-post-page-client";

export const instant = false;

interface ManagePostProps {
  params: Promise<{ postId: string }>;
}

export default async function ManagePost({ params }: ManagePostProps) {
  const { postId } = await params;

  return <PostManagementPageClient postId={postId}/>;
}
