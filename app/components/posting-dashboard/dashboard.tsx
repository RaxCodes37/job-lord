import YourPostsDisplay from "./created-post-display";
import PostingNavBar from "./posting-navbar";

export default function PostingDashboardClient() {
  return (
    <div className="flex flex-col items-center">
      <PostingNavBar />

      <YourPostsDisplay/>
    </div>
  );
}
