import { JobPost } from "@/utils/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  yourPosts: JobPost[];
}

export default function YourPostsDisplay({ yourPosts }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-2xl font-bold">Your Jobs</h1>
      <div className="w-100 bg-[#3e3939] p-4 rounded-md shadow-2xl shadow-[#1f1e1e]">
        {yourPosts.length === 0 ? (
          <p className="text-white">No jobs found</p>
        ) : (
          yourPosts.map((job) => (
            <div
              key={job.postId}
              onClick={() => router.push(`manage/job/${job.postId}`)}
              className="cursor-pointer"
            >
              <h2 className="text-white text-lg font-semibold">
                <span className="text-[#838282]">{job.company} -</span>{" "}
                {job.postTitle}
              </h2>
              <div className="w-full bg-[#333030] p-2 rounded-md mt-2">
                <p className="text-white">
                  {job.postDescription.substring(0, 47)}
                </p>
              </div>

              {yourPosts.length < 2 ? (
                <div></div>
              ) : (
                <hr className="mt-3 mb-2 text-[#333030]" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
