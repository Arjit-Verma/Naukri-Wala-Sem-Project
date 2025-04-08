import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { Menu, X } from "lucide-react";
import clogo from "../assets/companylogo.png";

export type MenuItem = {
  id: number;
  title: string;
  link: string;
};

type NavbarProps = {
  menuItems: MenuItem[];
};

function LandPageNavBar({ menuItems }: NavbarProps) {
  const location = useLocation(); // Get current route
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine which item is active based on the current URL
  const activeItem =
    menuItems.find((item) => item.link === location.pathname)?.id ||
    menuItems[0]?.id;

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      if (user) {
        setIsAuthenticated(true);
        setProfilePic("/path-to-user-image.jpg"); // Replace with actual user profile image
      } else {
        setIsAuthenticated(false);
        setProfilePic(null);
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full py-3 backdrop-blur-sm shadow-lg border z-20 bg-white/30">
      <div className="flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img src={clogo} alt="Company Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? "bg-blue-100 border border-blue-600 text-blue-600"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login / Sign Up or Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <img
              src={profilePic || "/default-profile.png"}
              alt="Profile"
              className="h-10 w-10 rounded-full border cursor-pointer"
            />
          ) : (
            <></>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={28} className="text-black" />
          ) : (
            <Menu size={28} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeItem === item.id
                      ? "bg-blue-100 border border-blue-600 text-blue-600"
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login / Sign Up or Profile in Mobile Menu */}
          <div className="flex flex-col items-center space-y-4 pb-4">
            {isAuthenticated ? (
              <img
                src={profilePic || "/default-profile.png"}
                alt="Profile"
                className="h-10 w-10 rounded-full border cursor-pointer"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default LandPageNavBar;
