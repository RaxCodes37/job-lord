import ApplicationsPageClient from "@/app/components/posting-applications/applications-page-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const instant = false;

interface ApplicationsPageProps {
  params: Promise<{ postId: string }>;
}

export default async function ApplicationsPage({
  params,
}: ApplicationsPageProps) {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  const { postId } = await params;

  return <ApplicationsPageClient postId={postId} />;
}
