import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DashboardNavBar from './nav-bar';
export const instant = false;

export default async function HomePage() {
  const session = await getSession();
  if(!session) redirect('/sign-in');

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1c1c1c] text-white">
      <DashboardNavBar />
    </div>
  )
}
