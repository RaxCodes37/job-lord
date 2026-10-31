import { getSession } from "@/lib/auth";
import SettingsPageClient from "../components/settings/settings-client";
import { redirect } from "next/navigation";
export const instant = false


export default async function Settings() {
  const session = await getSession();
  if(!session) redirect("/sign-in");

  const userId = session.user.id;

  return <SettingsPageClient userId={userId}/>;
}
