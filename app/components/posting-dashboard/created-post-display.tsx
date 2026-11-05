import { JobPost } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

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
            <div key={job.postId}>
              <div className="flex justify-between items-center">
                <h2 className="text-white text-lg font-semibold">
                  <span className="text-[#838282]">{job.company} -</span>{" "}
                  {job.postTitle}
                </h2>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      router.push(`/posting/applications/${job.postId}`)
                    }
                    className="border border-[#8ba0ff] rounded-md bg-[#6981ea] p-1 duration-500 hover:bg-[#4d62c1] hover:border-[#5b79ff]"
                  >
                    <LuClipboardList />
                  </button>
                  <button
                    onClick={() => router.push(`manage/${job.postId}`)}
                    className="cursor-pointer border border-[#838282] rounded-md bg-[#353030] p-1 duration-500 hover:bg-[#292626] hover:border-[#5e5e5e]"
                  >
                    <BsThreeDots />
                  </button>
                </div>
              </div>

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
