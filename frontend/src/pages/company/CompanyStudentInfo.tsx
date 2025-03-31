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
      name: "John Doe",
      college: "IIIT DWD",
      branch: "Computer Science",
      position: "Software Engineer",
      status: "Recruited",
    },
    {
      id: 2,
      name: "Jane Smith",
      college: "IIIT DWD",
      branch: "Information Technology",
      position: "Frontend Developer",
      status: "Recruited",
    },
    {
      id: 3,
      name: "Alice Johnson",
      college: "IIIT DWD",
      branch: "Software Engineering",
      position: "Backend Developer",
      status: "Recruited",
    },
    {
      id: 4,
      name: "Bob Brown",
      college: "IIIT DWD",
      branch: "Cybersecurity",
      position: "Security Analyst",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Charlie Green",
      college: "IIIT DWD",
      branch: "Data Science",
      position: "Data Scientist",
      status: "Recruited",
    },
    {
      id: 6,
      name: "Diana White",
      college: "IIIT DWD",
      branch: "Web Development",
      position: "UI/UX Designer",
      status: "Rejected",
    },
    {
      id: 7,
      name: "Ethan Black",
      college: "IIIT DWD",
      branch: "Mobile Development",
      position: "Mobile Developer",
      status: "Recruited",
    },
    {
      id: 8,
      name: "Fiona Blue",
      college: "IIIT DWD",
      branch: "Artificial Intelligence",
      position: "ML Engineer",
      status: "Recruited",
    },
    {
      id: 9,
      name: "George Yellow",
      college: "IIIT DWD",
      branch: "Game Development",
      position: "Game Developer",
      status: "Rejected",
    },
    {
      id: 10,
      name: "Hannah Pink",
      college: "IIIT DWD",
      branch: "Network Engineering",
      position: "Network Engineer",
      status: "Recruited",
    },
    {
      id: 11,
      name: "Isaac Gray",
      college: "IIIT DWD",
      branch: "Cloud Computing",
      position: "Cloud Architect",
      status: "Recruited",
    },
    {
      id: 12,
      name: "Julia Violet",
      college: "IIIT DWD",
      branch: "Robotics",
      position: "Robotics Engineer",
      status: "Rejected",
    },
    {
      id: 13,
      name: "Kevin Orange",
      college: "IIIT DWD",
      branch: "Digital Marketing",
      position: "Marketing Specialist",
      status: "Recruited",
    },
    {
      id: 14,
      name: "Laura Cyan",
      college: "IIIT DWD",
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
