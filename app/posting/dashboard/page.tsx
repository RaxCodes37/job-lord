import PostingDashboardClient from "@/app/components/posting-dashboard/dashboard";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
export const instant = false

export default async function PostingPage() {
  const session = await getSession();
  if(!session) redirect("/sign-in");

  const userId = session.user.id;

  return (
    <div className="bg-[#1c1c1c] h-screen text-white">
      <PostingDashboardClient userId={userId}/>
    </div>
  );
}
