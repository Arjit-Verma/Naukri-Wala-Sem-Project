import NavBarItem, { MenuItem } from "../../functions/NavBarItem";
import HeroSection from "../../components/HeroSection";
import FooterSection from "../../components/FooterSection";
import StudentHS from "../../components/student/StudentHS";
import { LogIn } from "lucide-react";

const NavBarMenu: MenuItem[] = [
  { id: 0, title: "Info", link: "/" },
  { id: 1, title: "Students", link: "/student" },
  { id: 2, title: "University", link: "/college" },
  { id: 3, title: "Company", link: "/company" },
  { id: 4, title: "Services", link: "/services" },
  { id: 5, title: "About Us", link: "/aboutus" },
];

function StudentLandPage() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <NavBarItem
        menuItems={NavBarMenu}
        login={"/student/login"}
        signup="/student/signup"
      />
      {/* Scrollable Content */}
      <div className="relative flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 z-10">
        {/* Hero Section with Aanimation */}
        <StudentHS></StudentHS>
        <FooterSection />
      </div>
    </div>
  );
}

export default StudentLandPage;
