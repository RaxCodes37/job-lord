"use client";
import DashboardNavBar from "./nav-bar";
import JobDisplay from "./job-display";
import { useEffect, useState } from "react";
import { JobPost } from "@/utils/interfaces";
import { getAllJobs } from "@/utils/db-actions";

export default function HomePageClient() {
  const [jobs, setJobs] = useState<JobPost[]>([]);

  useEffect(() => {
    const getJobs = async () => {
      setJobs(await getAllJobs());
    };

    getJobs();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <DashboardNavBar />
      <JobDisplay jobs={jobs}/>
    </div>
  );
}
