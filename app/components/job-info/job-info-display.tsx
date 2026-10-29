"use client";

import { JobPost } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  jobData: JobPost[];
}

export default function JobInfoDisplay({ jobData }: Props) {
  const router = useRouter();
  return (
    <div className="w-100 border border-[#605252] rounded-md bg-[#3e3939]">
      {jobData.length === 0 ? (
        <div></div>
      ) : (
        <div>
          {jobData.map((job) => (
            <div key={job.postId}>
              <div className="py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="px-3 text-xl font-semibold text-[#838282]">
                      {job.company}
                    </h3>
                    <h2 className="px-3 mt-1 text-2xl font-bold">
                      {job.postTitle}
                    </h2>
                  </div>
                  <button
                    className="border border-[#838282] rounded-md bg-[#353030] p-1 m-1 mr-3 duration-500 hover:bg-[#292626] hover:border-[#5e5e5e]"
                    onClick={() => router.back()}
                  >
                    <FaArrowLeft />
                  </button>
                </div>
                <hr className="mt-3 mb-2 text-[#605252]" />
              </div>
              <div className="pb-3">
                <h3 className="px-3 text-2xl font-semibold text-[#838282]">
                  Job Description:
                </h3>
                <p className="px-3 mt-1">{job.postDescription}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
