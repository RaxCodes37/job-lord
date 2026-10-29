"use client";

import { JobPost } from "@/utils/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  jobs: JobPost[];
}

export default function JobDisplay({ jobs }: Props) {
  const router = useRouter();

  return (
    <div className="w-100 bg-[#3e3939] p-4 rounded-md">
      {jobs.length === 0 ? (
        <p className="text-white">No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.postId}
            onClick={() => router.push(`/job/${job.postId}`)}
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

            <hr className="mt-3 mb-2 text-[#333030]" />
          </div>
        ))
      )}
    </div>
  );
}
