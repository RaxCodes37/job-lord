import SearchBarComponent from "./nav-bar-components/search-bar";
import UserSettingsComponent from "./nav-bar-components/user-settings";

export default function DashboardNavBar() {
  return (
    <div className="mt-3">
      <SearchBarComponent />
      <UserSettingsComponent />
    </div>
  );
}
