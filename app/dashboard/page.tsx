import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
export const instant = false;

export default async function HomePage() {
  const session = await getSession();
  if(!session) redirect('/sign-in');

  return (
    <div>
      
    </div>
  )
}
