import NavBarItem, { MenuItem } from "../../functions/NavBarItem";

import FooterSection from "../../components/FooterSection";
import CollegeHS from "../../components/college/CollegeHS";

const NavBarMenu: MenuItem[] = [
  { id: 0, title: "Info", link: "/" },
  { id: 1, title: "Students", link: "/student" },
  { id: 2, title: "University", link: "/college" },
  { id: 3, title: "Company", link: "/company" },
  { id: 4, title: "Services", link: "#" },
  { id: 5, title: "About Us", link: "#" },
];

function CollegeLandPage() {
  return (
    <div id="/Home" className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <NavBarItem
        menuItems={NavBarMenu}
        login="/college/login"
        signup="/college/signup"
      />
      {/* Scrollable Content */}
      <div className="relative flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 z-10">
        {/* Hero Section with Aanimation */}
        <CollegeHS></CollegeHS>
        <FooterSection />
      </div>
    </div>
  );
}

export default CollegeLandPage;
