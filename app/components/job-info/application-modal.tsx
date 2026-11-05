"use client";

import { postApplication } from "@/utils/db-actions";
import { JobPost } from "@/utils/interfaces";
import { useState, type FormEvent } from "react";
import { FaX } from "react-icons/fa6";

interface Props {
  job: JobPost;
  userId: string;
  onClose: () => void;
}

export default function ApplicationModal({ job, userId, onClose }: Props) {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");

  const handleApplicationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await postApplication(
        applicantName,
        userId,
        applicantEmail,
        applicantMessage,
        job.postId,
      );
    } catch (error) {
      console.error("Error sending your application", error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-lg border border-[#605252] bg-[#3e3939] p-6 shadow-2xl shadow-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Apply for this job</h2>
            <p className="mt-1 text-[#a6a2a2]">
              {job.postTitle} at {job.company}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close application dialog"
            className="rounded-md px-2 py-3 text-xl hover:bg-[#292626]"
            onClick={onClose}
          >
            <FaX />
          </button>
        </div>
        <form onSubmit={handleApplicationSubmit}>
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              required
              value={applicantName}
              onChange={(event) => setApplicantName(event.target.value)}
              type="text"
              autoComplete="name"
              className="w-full rounded-md border border-[#605252] bg-[#292626] px-3 py-2 outline-none"
            />
          </label>
          <label className="block mt-3">
            <span className="mb-1 block">Email</span>
            <input
              required
              type="email"
              value={applicantEmail}
              onChange={(event) => setApplicantEmail(event.target.value)}
              autoComplete="email"
              className="w-full rounded-md border border-[#605252] bg-[#292626] px-3 py-2 outline-none"
            />
          </label>
          <label className="block mt-3">
            <span className="mb-1 block">Message</span>
            <textarea
              value={applicantMessage}
              onChange={(event) => setApplicantMessage(event.target.value)}
              placeholder="Write a message to the employer..."
              rows={4}
              className="w-full rounded-md border border-[#605252] bg-[#292626] px-3 py-2 outline-none"
            />
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="rounded-md border border-[#838282] px-3 py-2 hover:bg-[#292626]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-[#8ba0ff] bg-[#6981ea] px-3 py-2 hover:bg-[#4d62c1]"
            >
              Submit application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
