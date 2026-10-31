import { useRouter } from "next/navigation";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function UserSettingsComponent() {
  const router = useRouter();

  return (
    <button
      className="fixed right-10 top-5 border border-[#605252] rounded-[100%] bg-[#3e3939] px-2 py-1 h-10 w-10 flex items-center justify-center"
      onClick={() => router.push("/settings")}
    >
      <FaUser />
    </button>
  );
}
