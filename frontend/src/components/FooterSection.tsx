import { ArrowRight } from "lucide-react";
import logo from "../assets/companylogo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

//This is Footer Section For the Hero Section Page, This Will Be Global for Each Landing Page for each StakeHolder
function FooterSection() {
  return (
    <footer className="bg-gray-900">
      <div className="w-full justify-between max-w-screen-xl mx-auto p-6 md:py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo + Address */}
          <div>
            <a href="#" className="flex items-center space-x-3">
              <img
                src={logo}
                className="h-16 filter invert brightness-200"
                alt="Company Logo"
              />
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Ittigati Road Sattur, Dharwad, India
              <br />
              Email: naukriwala@company.com <br />
              Phone: +123 456 7890
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-200">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-200">Follow Us</h2>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            NaukriWala™
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export default FooterSection;
