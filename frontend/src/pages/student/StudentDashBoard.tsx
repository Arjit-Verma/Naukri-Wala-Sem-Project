import StakeNavBar, { MenuItem2 } from "../../functions/StakeNavBar";
import cap from "../../assets/cap.png";
import bag from "../../assets/bag.png";
import student from "../../assets/cstudent.png";
import { useState } from "react";
const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/student_dashboard" },
  { id: 1, title: "Resume", link: "/student_resume" },
  { id: 2, title: "ATS Score", link: "/ats_score" },
  { id: 3, title: "Templates", link: "/cold_et" },
];

const jobCompanies = [
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
];
export default function StudentDashboard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
      {/* Welcome Banner */}
      <div className="py-20 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 z-10">
        <section className="bg-linear-to-t from-sky-500 to-indigo-500 text-white  rounded-xl mx-4 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="p-6">
            <h3 className="text-sm py-4">1st April </h3>
            <h1 className="text-3xl font-bold">Welcome back, Arjit!</h1>
            <p className="text-gray-200">
              Always stay updated in your student portal
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
            For Job (Check where you can apply)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {jobCompanies
              .slice(0, showMore ? jobCompanies.length : 5)
              .map((company, index) => (
                <div
                  key={index}
                  className="p-4 bg-white drop-shadow-md shadow rounded-lg flex flex-col items-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 w-20 mb-2"
                  />
                  <p>{company.name}</p>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                    Apply
                  </button>
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
        <section className="mt-6 px-4">
          <h2 className="text-xl font-semibold">Courses Completed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              "Object Oriented Programming",
              "Fundamentals of Database Systems",
              "Computer Architecture",
            ].map((course, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
              >
                <p>{course}</p>
                <span className="px-3 py-1 border border-gray-400 rounded text-gray-600">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
