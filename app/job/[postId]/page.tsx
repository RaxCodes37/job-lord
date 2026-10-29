import JobInfoClient from "@/app/components/job-info/job-info-client";

export const instant = false;

interface JobDisplayProps {
  params: Promise<{ postId: string }>;
}

export default async function JobDisplay({ params }: JobDisplayProps) {
  const { postId } = await params;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1c1c1c] text-white">
      <JobInfoClient postId={postId} />
    </div>
  );
}
