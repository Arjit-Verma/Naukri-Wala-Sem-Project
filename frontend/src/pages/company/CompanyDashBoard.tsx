import cap from "../../assets/cap.png";
import bag from "../../assets/bag.png";
import student from "../../assets/cstudent.png";
import { useState } from "react";
import { MenuItem2 } from "../../types";
import studentimage from "../../assets/digant.jpg";

import { CompanyProfileCard } from "../../components/company/CompanyProfileCard";
import CompanyNavBar from "../../components/company/CompanyNavBar";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];

interface College {
  name: string;
  logo: string;
}

const colleges: College[] = [
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
];

const profiles = [
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl: student,
    date: "Arpil 1 2025",
  },
  {
    name: "Alice Johnson",
    position: "Product Manager",
    imageUrl: studentimage,
    date: "Arpil 5 2025",
  },
  {
    name: "Michael Simbal",
    position: "Data Scientist",
    imageUrl: student,
    date: "Arpil 10 2025",
  },
  {
    name: "Alice Johnson",
    position: "Product Manager",
    imageUrl: studentimage,
    date: "May 10 2025",
  },
  {
    name: "Michael Simbal",
    position: "Data Scientist",
    imageUrl: student,
    date: "May 1 2025",
  },
  {
    name: "Alice Johnson",
    position: "Product Manager",
    imageUrl: studentimage,
    date: "May 10 2025",
  },
  {
    name: "Michael Simbal",
    position: "Data Scientist",
    imageUrl: student,
    date: "May 10 2025",
  },
  {
    name: "Alice Johnson",
    position: "Product Manager",
    imageUrl: studentimage,
    date: "May 10 2025",
  },
  {
    name: "Michael Simbal",
    position: "Data Scientist",
    imageUrl: student,
    date: "May 11 2025",
  },
];

export default function CompanyDashBoard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      {/* Welcome Banner */}
      <div className="py-20 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 z-10">
        <section className="bg-linear-to-t from-purple-400 to-indigo-500 text-white  rounded-xl mx-4 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="p-6">
            <h3 className="text-sm py-4">1st April </h3>
            <h1 className="text-3xl font-bold">Welcome back, Company!</h1>
            <p className="text-gray-200">
              Always stay updated in your this portal
            </p>
          </div>
          <div className="flex items-baseline gap-4 px-5">
            {/* Only visible on md (medium) and larger screens */}
            <img src={cap} alt="cap" className="hidden md:block " />
            <img src={bag} alt="bag" className="hidden md:block" />

            {/* Always visible */}
            <img src={student} alt="student" className="sm:block pt-5" />
          </div>
        </section>

        <div className="my-6 border-b border-gray-300"></div>

        {/* Job Applications */}
        <section className="mt-6 px-10">
          <h2 className="text-xl font-semibold text-black">
            Colleges To Recruit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {colleges
              .slice(0, showMore ? colleges.length : 5)
              .map((company, index) => (
                <div
                  key={index}
                  className="p-4 bg-linear-to-t from-purple-100 to-gray-200 drop-shadow-md shadow rounded-lg flex flex-col items-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 w-20 mb-2"
                  />
                  <div className="border h-1 w-20 bg-black"></div>
                  <p className="text-gray-800">{company.name}</p>
                </div>
              ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gray-100 text-blue-600 rounded mx-auto block hover:bg-blue-100"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>

        <div className="my-6 border-b border-gray-300"></div>

        {/* Completed Courses */}
        <section className="mt-6 px-10">
          <h2 className="text-xl font-semibold">On Campus Hiring</h2>
          <div className="items-center grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 mt-4 ">
            {profiles.map((profile, index) => (
              <CompanyProfileCard
                key={index}
                name={profile.name}
                image={profile.imageUrl}
                position={profile.position}
                date={profile.date}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
