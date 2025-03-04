import AnimatedBg from "../components/AnimatedBg";
import logo from "../assets/companylogo.png";

const NavBarMenu = [
  { id: 1, title: "Universities", link: "#" },
  { id: 2, title: "Employers", link: "#" },
  { id: 3, title: "Students", link: "#" },
  { id: 4, title: "Blogs", link: "#" },
  { id: 5, title: "Contact ", link: "#" },
  { id: 6, title: "Security", link: "#" },
];

function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background Component */}
      <div className="fixed inset-0 z-0">
        <AnimatedBg />
      </div>

      {/* Nav Bar */}
      <div className=""></div>
      {/* Content Area */}
      <div className="relative z-1 pt-40 text-black">
        Hello
        {/* Add more content here to make it scrollable */}
        <div style={{ height: "200vh" }}>Scrollable content goes here...</div>
      </div>
    </div>
  );
}

export default LandingPage;
