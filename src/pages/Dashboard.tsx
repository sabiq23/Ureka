import { useUserRole } from "@/contexts/UserRoleContext";
import ResearcherDashboard from "./dashboards/ResearcherDashboard";
import MentorDashboard from "./dashboards/MentorDashboard";
import SponsorDashboard from "./dashboards/SponsorDashboard";

const Dashboard = () => {
  const { role } = useUserRole();

  if (role === "mentor") return <MentorDashboard />;
  if (role === "sponsor") return <SponsorDashboard />;
  return <ResearcherDashboard />;
};

export default Dashboard;
