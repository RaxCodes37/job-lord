"use client";

import { getSpecificJobInfo } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import JobInfoDisplay from "./job-info-display";

interface Props {
  postId: string;
}

export default function JobInfoClient({ postId }: Props) {
  const [jobData, setJobData] = useState<JobPost[]>([]);
  
  useEffect(() => {
    const fetchJobData = async () => {
      setJobData(await getSpecificJobInfo(postId));
    }

    fetchJobData();
  }, []);
  
  return <div>
    <JobInfoDisplay jobData={jobData} />
  </div>;
}
