import JobInfoClient from "@/app/components/job-info/job-info-client";

export const instant = false;

interface JobDisplayProps {
  params: Promise<{ postId: string }>;
}

export default async function JobDisplay({ params }: JobDisplayProps) {
  const { postId } = await params;

  return (
    <div>
      <JobInfoClient postId={postId} />
    </div>
  );
}
