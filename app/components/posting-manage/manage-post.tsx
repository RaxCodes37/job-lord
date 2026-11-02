import { deletePost } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck, FaTrash } from "react-icons/fa6";

interface Props {
  post: JobPost[];
  postTitle: string;
  setPostTitle: React.Dispatch<React.SetStateAction<string>>;
  postDescription: string;
  setPostDescription: React.Dispatch<React.SetStateAction<string>>;
  editPostFunction: (
    postId: string,
    postTitle: string,
    postDescription: string,
  ) => Promise<void>;
}

export default function ManagePostDisplay({
  post,
  postTitle,
  setPostTitle,
  postDescription,
  setPostDescription,
  editPostFunction,
}: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <div className="w-100 bg-[#3e3939] rounded-md shadow-2xl shadow-[#1f1e1e] border border-[#605252]">
        {post.length === 0 ? (
          <div></div>
        ) : (
          <div>
            {post.map((job) => (
              <div key={job.postId}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="mt-3 px-3 text-xl font-semibold text-[#838282]">
                      {job.company}
                    </h3>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        className="w-full px-3 py-2 mx-3 mt-1 text-xl bg-[#353030] border-2 border-[#838282] rounded-md text-white focus:outline-none"
                        value={postTitle}
                        onChange={(event) => setPostTitle(event.target.value)}
                        placeholder="New title"
                      />
                    </div>
                  </div>
                  <div className="flex mt-3 mr-2 gap-2">
                    <button
                      className=" border border-[#838282] rounded-md bg-[#353030] p-1 duration-500 hover:bg-[#292626] hover:border-[#5e5e5e]"
                      onClick={() => router.back()}
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      className="border border-[#838282] rounded-md bg-[#353030] p-1 duration-500 hover:bg-[#292626] hover:border-[#5e5e5e]"
                      onClick={() =>
                        editPostFunction(job.postId, postTitle, postDescription)
                      }
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="rounded-md border border-[#e67474] bg-[#c35353] p-1 duration-500 hover:bg-[#a54242]"
                      onClick={async () => {
                        await deletePost(job.postId);
                        router.back();
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <hr className="mt-3 mb-2 text-[#605252]" />

                <div className="pb-3 flex flex-col justify-center">
                  <h3 className="px-3 text-2xl font-semibold text-[#838282]">
                    Job Description:
                  </h3>
                  <textarea
                    className="w-94 h-fit px-3 py-2 mx-3 mt-1 bg-[#353030] border-2 border-[#838282] rounded-md text-white focus:outline-none"
                    value={postDescription}
                    onChange={(event) => setPostDescription(event.target.value)}
                    placeholder="New description"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
