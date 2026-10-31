"use client"

import UserSettingsComponent from "../dashboard/nav-bar-components/user-settings";
import CreateJob from "./posting-nav-bar-components.tsx/create-job";

export default function PostingNavBar() {
  return (
    <div className="mt-3">
      <CreateJob />
      <UserSettingsComponent />
    </div>
  );
}