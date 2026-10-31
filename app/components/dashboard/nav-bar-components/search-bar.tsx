"use client";

import { searchJobs } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBarComponent() {
  const [search, setSearch] = useState("")
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) return;

    try {
      router.push(`/search?q=${encodeURIComponent(search)}`);
      setSearch("");
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <form
      className="flex items-center gap-2 text-white"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-[#605252] bg-[#3e3939] rounded-md focus:outline-none p-1 px-2 h-10"
      />
      <button className="border border-[#605252] bg-[#3e3939] p-1 px-3 rounded-md h-10">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}
