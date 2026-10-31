"use client"

import UserSettingsComponent from "../dashboard/nav-bar-components/user-settings";
import CreateJob from "./posting-nav-bar-components.tsx/create-job";

interface Props {
  userId: string
}

export default function PostingNavBar({userId}: Props) {
  return (
    <div className="mt-3">
      <CreateJob userId={userId}/>
      <UserSettingsComponent />
    </div>
  );
}