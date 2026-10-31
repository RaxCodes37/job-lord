"use client";

import { useState } from "react";
import { FaPlus, FaX } from "react-icons/fa6";

export default function CreateJob() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Create a job"
        className="fixed left-6 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#838282] bg-[#353030] duration-400 hover:bg-[#292626] hover:border-[#5e5e5e] text-white"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <FaPlus aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            aria-labelledby="create-job-title"
            aria-modal="true"
            className="relative w-full max-w-xl rounded-md border border-white/10 bg-[#242222] p-6 text-white shadow-2xl sm:p-8"
            role="dialog"
          >
            <button
              aria-label="Close create job dialog"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <FaX />
            </button>

            <div className="mb-4 pr-10">
              <h2
                className="text-2xl font-semibold tracking-tight"
                id="create-job-title"
              >
                Create a job
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Add the details for the role you&apos;re hiring for.
              </p>
            </div>

            <form className="flex flex-col gap-3">
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-200">
                Job title
                <input
                  className="rounded-md border border-white/10 bg-[#191818] p-2 text-white outline-none"
                  placeholder="e.g. Frontend Engineer"
                  required
                  type="text"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-200">
                Company
                <input
                  className="rounded-md border border-white/10 bg-[#191818] p-2 text-white outline-none"
                  placeholder="Company name"
                  required
                  type="text"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-200">
                Job description
                <textarea
                  className="min-h-30 resize-y rounded-md border border-white/10 bg-[#191818] p-2 text-white outline-none"
                  placeholder="Describe the role and what you're looking for..."
                  required
                />
              </label>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
