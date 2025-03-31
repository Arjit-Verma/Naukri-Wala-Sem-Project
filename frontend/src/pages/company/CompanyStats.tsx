import CompanyNavBar from "../../components/company/CompanyNavBar";
import JobStatisticsChart from "../../components/college/JobStatisticsChart";

import DoughnutChart from "../../components/DonughtChart";
import { MenuItem2 } from "../../types";
import RecruitsInfo from "../../components/company/RecuritsInfo";
import RecruitsAnalysis from "../../components/company/RecruitsAnalysis";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];

export function CompanyStats() {
  return (
    <div className="container  mx-auto p-4 w-full h-screen overflow-y-auto">
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      <div className="pt-15 grid grid-cols-1 md:grid-cols-3 gap-4">
        <DoughnutChart />
        <RecruitsInfo />
        <RecruitsAnalysis />
      </div>
      <JobStatisticsChart />
    </div>
  );
}
