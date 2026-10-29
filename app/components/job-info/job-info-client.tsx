"use client";

import { getSpecificJobInfo } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import JobInfoDisplay from "./job-info-display";
import DashboardNavBar from "../dashboard/nav-bar";

interface Props {
  postId: string;
}

export default function JobInfoClient({ postId }: Props) {
  const [jobData, setJobData] = useState<JobPost[]>([]);

  useEffect(() => {
    const fetchJobData = async () => {
      setJobData(await getSpecificJobInfo(postId));
    };

    fetchJobData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <DashboardNavBar />
      <JobInfoDisplay jobData={jobData} />
    </div>
  );
}
