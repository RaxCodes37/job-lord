"use client";

import { searchJobs } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useEffect, useState } from "react";

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

  return <div></div>;
}
