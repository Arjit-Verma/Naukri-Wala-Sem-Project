import CollegeNavBar from "../../components/college/CollegeNavBar";
import JobStatisticsChart from "../../components/college/JobStatisticsChart";
import PlacementAnalysis from "../../components/college/PlacmentAnalysis";
import StudentInfo from "../../components/college/StudentInfo";
import DoughnutChart from "../../components/DonughtChart";
import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/college/dashboard" },
  { id: 1, title: "Stats", link: "/college/stats" },
  { id: 2, title: "Student Info", link: "/college/studentinfo" },
  { id: 3, title: "Company Info", link: "/college/companyinfo" },
];

export function CollegeStats() {
  return (
    <div className="container mx-auto p-4 w-full h-screen overflow-y-auto">
      <CollegeNavBar menuItems={NavBarMenu}></CollegeNavBar>
      <div className="pt-15 grid grid-cols-1 md:grid-cols-3 gap-4">
        <DoughnutChart />
        <StudentInfo />
        <PlacementAnalysis />
      </div>
      <JobStatisticsChart />
    </div>
  );
}
