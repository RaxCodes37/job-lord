"use client";

import { getPostApplications } from "@/utils/db-actions";
import { JobApplication } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import ApplicationsDisplay from "./applications-display";

interface Props {
  postId: string;
}

export default function ApplicationsPageClient({ postId }: Props) {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setApplications(await getPostApplications(postId));
      } catch (error) {
        console.error("Error fetching applications", error);
        setError("Unable to load applications for this post.");
      }
    };

    fetchApplications();
  }, [postId]);

  console.log(applications)

  return <ApplicationsDisplay applications={applications} error={error} />;
}
