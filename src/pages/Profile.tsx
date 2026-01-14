import { useUserRole } from "@/contexts/UserRoleContext";
import ResearcherProfile from "./profiles/ResearcherProfile";
import MentorProfile from "./profiles/MentorProfile";
import SponsorProfile from "./profiles/SponsorProfile";

const Profile = () => {
  const { role } = useUserRole();

  if (role === "mentor") return <MentorProfile />;
  if (role === "sponsor") return <SponsorProfile />;
  return <ResearcherProfile />;
};

export default Profile;
