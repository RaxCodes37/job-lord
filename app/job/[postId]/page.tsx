export const instant = false;

interface JobDisplayProps {
  params: Promise<{ postId: string }>;
}

export default async function JobDisplay({params}: JobDisplayProps) {
  const { postId } = await params;
  
  console.log(postId);

  return (
    <div>
      
    </div>
  )
}
