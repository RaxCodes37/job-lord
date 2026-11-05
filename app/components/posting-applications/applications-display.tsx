import { JobApplication } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  applications: JobApplication[];
  error: string | null;
}

export default function ApplicationsDisplay({ applications, error }: Props) {
  if (error) return <p>{error}</p>;
  if (applications.length === 0)
    return (
      <p className="text-white text-center mt-4 text-xl">
        No applications yet.
      </p>
    );
  const router = useRouter();

  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-100 h-screen bg-[#3e3939] p-4 rounded-md shadow-2xl shadow-[#1f1e1e]">
        <div className="flex justify-between items-centter">
          <h2 className="text-2xl">Applications</h2>
          <button
            onClick={router.back}
            className="border border-[#838282] rounded-md bg-[#353030] p-1 px-2 duration-500 hover:bg-[#292626] hover:border-[#5e5e5e]"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="mt-4">
          {applications.map((application) => (
            <div
              key={application.applicationId}
              className="gap-4 bg-[#2a2a2a] p-2 rounded-md mt-2"
            >
              <div className="flex gap-2">
                <h3>{application.applicantName}</h3> -
                <p>{application.applicantEmail}</p>
              </div>
              <p className="bg-[#1c1c1c] p-2 rounded-md mt-1">
                {application.applicantMessage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
