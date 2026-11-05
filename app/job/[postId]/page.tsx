import JobInfoClient from "@/app/components/job-info/job-info-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const instant = false;

interface JobDisplayProps {
  params: Promise<{ postId: string }>;
}

export default async function JobDisplay({ params }: JobDisplayProps) {
  const session = await getSession();
  if(!session) redirect("/sign-in");
  const { postId } = await params;
  const userId = session.user.id;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1c1c1c] text-white">
      <JobInfoClient postId={postId} userId={userId} />
    </div>
  );
}
