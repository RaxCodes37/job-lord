import YourPostsDisplay from "./created-post-display";
import PostingNavBar from "./posting-navbar";

interface Props {
  userId: string
}

export default function PostingDashboardClient({userId}: Props) {
  return (
    <div className="flex flex-col items-center">
      <PostingNavBar userId={userId}/>

      <YourPostsDisplay/>
    </div>
  );
}
