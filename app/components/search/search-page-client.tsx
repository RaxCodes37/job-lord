"use client";

import { searchJobs } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import DashboardNavBar from "../dashboard/nav-bar";
import DisplaySearchResults from "./display-search-results";

interface Props {
  search: string;
}

export default function SearchPageClient({ search }: Props) {
  const [searchResults, setSearchResults] = useState<JobPost[]>([]);

  useEffect(() => {
    const getSearchResulsts = async () => {
      setSearchResults(await searchJobs(search));
    };

    getSearchResulsts();
  }, []);

  console.log(searchResults);

  return (
    <div className="flex flex-col items-center gap-10">
      <DashboardNavBar />

      <DisplaySearchResults jobs={searchResults}></DisplaySearchResults>
    </div>
  );
}
