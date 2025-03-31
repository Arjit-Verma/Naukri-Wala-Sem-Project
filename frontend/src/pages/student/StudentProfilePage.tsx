import { useState, useEffect } from "react";
import { PlusCircle, Upload, Edit } from "lucide-react";
import StakeNavBar from "../../functions/StakeNavBar";
import student from "../../assets/student.jpg";
import { MenuItem2 } from "../../types";
const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/student/dashboard" },
  { id: 1, title: "Resume", link: "/student/resume" },
  { id: 2, title: "ATS Score", link: "/student/ats_score" },
  { id: 3, title: "Templates", link: "/student/coldmail" },
  { id: 4, title: "Company", link: "/student/companylist" },
];

interface Profile {
  name: string;
  email: string;
  gender: string;
  college: string;
  skills: string[];
  gpa: Number;
  projects: { title: string; description: string }[];
  experience: { title: string; description: string }[];
  certificates: string[];
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setProfile({
        name: "Arjit Verma",
        email: "22bcs015@iiitdwd.ac.in",
        gender: "Male",
        college: "IIIT Dharwad",
        skills: ["React", "Node.js", "Python"],
        gpa: 9.85,
        projects: [
          { title: "Project 1", description: "Project Description" },
          { title: "Project 2", description: "Project Description" },
        ],
        experience: [{ title: "Job 1", description: "Job Description" }],
        certificates: [],
      });
    }, 1000);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
      <div className="pt-22 pb-10 px-5 bg-white min-h-screen">
        {/* Profile Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={student}
              alt="profile"
              className="h-20 w-20 rounded-full border"
            />
            <div>
              <h1 className="text-xl text-black font-semibold">
                {profile?.name}
              </h1>
              <p className="text-gray-600">{profile?.email}</p>
            </div>
          </div>
          <div className="gap-4 space-y-5 ">
            <button className="px-4 py-2 bg-blue-600 text-white rounded items-center gap-2  ">
              <Upload size={16} /> Upload Resume
            </button>
            <button className="px-4 py-2 bg-gray-200 text-black rounded flex items-center gap-2">
              <Edit size={16} /> Edit
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-black">Full Name</p>
            <div className="p-2 text-gray-500 bg-gray-100 rounded">
              {profile?.name}
            </div>
          </div>
          <div>
            <p className="text-black">College Name</p>
            <div className="p-2 text-gray-500 bg-gray-100 rounded">
              {profile?.college}
            </div>
          </div>
          <div>
            <p className="text-black">Gender</p>
            <div className="p-2 text-gray-500 bg-gray-100 rounded">
              {profile?.gender}
            </div>
          </div>
          <div>
            <p className="text-black">Skills</p>
            <div className="p-2 bg-gray-100 rounded flex flex-wrap gap-2">
              {profile?.skills.map((skill, index) => (
                <span key={index} className="bg-blue-200 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-black">GPA</p>
            <div className="p-2 text-gray-500 bg-gray-100 rounded flex flex-wrap gap-2">
              {profile?.gpa?.toFixed(2)} / 10
            </div>
          </div>
          <div>
            <p className="text-black">College</p>
            <div className="p-2 text-gray-500 bg-gray-100 rounded flex flex-wrap gap-2">
              IIIT Dwd
            </div>
          </div>
          <div>
            <p className="text-black">BackLogs</p>
            <div className="p-2 text-gray-500 bg-gray-100 rounded flex flex-wrap gap-2">
              No
            </div>
          </div>
        </div>

        {/* Sections: Projects, Experience, Certificates */}
        {[
          { title: "Projects", data: profile?.projects },
          { title: "Experience", data: profile?.experience },
          { title: "Certificates", data: profile?.certificates },
        ].map((section, idx) => (
          <div key={idx} className="bg-white w-full text-black">
            <h2 className="pt-4 text-lg font-semibold text-black">
              {section.title}
            </h2>
            <div className="mt-2 border-2 border-gray-300"></div>
            <div className="mt-4 space-y-4">
              {section.data?.map((item, index) =>
                typeof item === "string" ? ( // Handle certificates (string)
                  <div key={index} className="bg-gray-100 rounded">
                    {item}
                  </div>
                ) : (
                  // Handle projects and experience (objects)
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded flex justify-between"
                  >
                    <p>{item.title}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                )
              )}
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
