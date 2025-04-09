import CompanyNavBar from "../../components/company/CompanyNavBar";
import { useState } from "react";
import { MenuItem2 } from "../../types";

type Student = {
  id: number;
  name: string;
  college: string;
  branch: string;
  position: string;
  status: "Recruited" | "Rejected";
};
const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];

const CompanyStudentInfo = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Aarav Gupta",
      college: "IIIT Hyderabad",
      branch: "Computer Science",
      position: "Software Engineer",
      status: "Recruited",
    },
    {
      id: 2,
      name: "Bhavya Sharma",
      college: "IIIT Bangalore",
      branch: "Information Technology",
      position: "Frontend Developer",
      status: "Recruited",
    },
    {
      id: 3,
      name: "Chirag Reddy",
      college: "IIT Bombay",
      branch: "Software Engineering",
      position: "Backend Developer",
      status: "Recruited",
    },
    {
      id: 4,
      name: "Divya Nair",
      college: "IIIT Delhi",
      branch: "Cybersecurity",
      position: "Security Analyst",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Eshan Joshi",
      college: "IIT Madras",
      branch: "Data Science",
      position: "Data Scientist",
      status: "Recruited",
    },
    {
      id: 6,
      name: "Fatima Khan",
      college: "IIIT Allahabad",
      branch: "Web Development",
      position: "UI/UX Designer",
      status: "Rejected",
    },
    {
      id: 7,
      name: "Gaurav Singh",
      college: "IIIT DWD",
      branch: "Mobile Development",
      position: "Mobile Developer",
      status: "Recruited",
    },
    {
      id: 8,
      name: "Harini Krishnan",
      college: "IIT Kharagpur",
      branch: "Artificial Intelligence",
      position: "ML Engineer",
      status: "Recruited",
    },
    {
      id: 9,
      name: "Ishaan Verma",
      college: "IIIT Gwalior",
      branch: "Game Development",
      position: "Game Developer",
      status: "Rejected",
    },
    {
      id: 10,
      name: "Jhanvi Desai",
      college: "IIIT Pune",
      branch: "Network Engineering",
      position: "Network Engineer",
      status: "Recruited",
    },
    {
      id: 11,
      name: "Kartik Iyer",
      college: "IIT Delhi",
      branch: "Cloud Computing",
      position: "Cloud Architect",
      status: "Recruited",
    },
    {
      id: 12,
      name: "Lavanya Patil",
      college: "IIIT Trichy",
      branch: "Robotics",
      position: "Robotics Engineer",
      status: "Rejected",
    },
    {
      id: 13,
      name: "Manav Sinha",
      college: "IIIT DWD",
      branch: "Digital Marketing",
      position: "Marketing Specialist",
      status: "Recruited",
    },
    {
      id: 14,
      name: "Nisha Raut",
      college: "IIT Kanpur",
      branch: "Business Analytics",
      position: "Business Analyst",
      status: "Recruited",
    },
  ]);

  return (
    <div>
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      <div className="p-6 pt-20 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Student Recruitment Status</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  College
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {student.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.college}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.branch}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.position}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        student.status === "Recruited"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanyStudentInfo;
