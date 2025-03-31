import CompanyNavBar from "../../components/company/CompanyNavBar";
import { useState } from "react";
import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];
type Student2 = {
  id: number;
  name: string;
  college: string;
  branch: string;
  gpa: number;
  status: "Recruited" | "Rejected" | "Interview";
  position: string;
};

type PositionStats = {
  position: string;
  totalApplicants: number;
  recruited: number;
  rejected: number;
  interview: number;
};

export default function CompanyApplication() {
  const [students] = useState<Student2[]>([
    {
      id: 1,
      name: "John Doe",
      college: "IIIT DWD",
      branch: "Computer Science",
      gpa: 7.8,
      status: "Recruited",
      position: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      college: "IIIT DWD",
      branch: "Information Technology",
      gpa: 9.6,
      status: "Recruited",
      position: "Frontend Developer",
    },
    {
      id: 3,
      name: "Alice Johnson",
      college: "IIIT DWD",
      branch: "Software Engineering",
      gpa: 8.9,
      status: "Interview",
      position: "Backend Developer",
    },
    {
      id: 4,
      name: "Bob Brown",
      college: "IIIT DWD",
      branch: "Cybersecurity",
      gpa: 8.5,
      status: "Rejected",
      position: "Security Analyst",
    },
    {
      id: 5,
      name: "Charlie Green",
      college: "IIIT DWD",
      branch: "Data Science",
      gpa: 8.7,
      status: "Recruited",
      position: "Data Scientist",
    },
    {
      id: 6,
      name: "Diana White",
      college: "IIIT DWD",
      branch: "Web Development",
      gpa: 8.4,
      status: "Rejected",
      position: "UI/UX Designer",
    },
    {
      id: 7,
      name: "Ethan Black",
      college: "IIIT DWD",
      branch: "Mobile Development",
      gpa: 7.9,
      status: "Interview",
      position: "Mobile Developer",
    },
    {
      id: 8,
      name: "Fiona Blue",
      college: "IIIT DWD",
      branch: "Artificial Intelligence",
      gpa: 8.8,
      status: "Recruited",
      position: "ML Engineer",
    },
    {
      id: 9,
      name: "George Yellow",
      college: "IIIT DWD",
      branch: "Game Development",
      gpa: 7.3,
      status: "Rejected",
      position: "Game Developer",
    },
    {
      id: 10,
      name: "Hannah Pink",
      college: "IIIT DWD",
      branch: "Network Engineering",
      gpa: 7.6,
      status: "Interview",
      position: "Network Engineer",
    },
  ]);
  // Calculate position statistics
  const positionStats: PositionStats[] = students.reduce((acc, student) => {
    const existingPosition = acc.find((p) => p.position === student.position);
    if (existingPosition) {
      existingPosition.totalApplicants++;
      if (student.status === "Recruited") existingPosition.recruited++;
      if (student.status === "Rejected") existingPosition.rejected++;
      if (student.status === "Interview") existingPosition.interview++;
    } else {
      acc.push({
        position: student.position,
        totalApplicants: 1,
        recruited: student.status === "Recruited" ? 1 : 0,
        rejected: student.status === "Rejected" ? 1 : 0,
        interview: student.status === "Interview" ? 1 : 0,
      });
    }
    return acc;
  }, [] as PositionStats[]);

  // Calculate totals
  const totalApplicants = students.length;
  const totalRecruited = students.filter(
    (s) => s.status === "Recruited"
  ).length;
  const totalRejected = students.filter((s) => s.status === "Rejected").length;
  const totalInterview = students.filter(
    (s) => s.status === "Interview"
  ).length;

  return (
    <div>
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      <div className="p-6 pt-20 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Applicants Table
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500">
              Total Applicants
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              {totalApplicants}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500">Recruited</h3>
            <p className="text-2xl font-bold text-green-600">
              {totalRecruited}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500">Interview</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {totalInterview}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500">Rejected</h3>
            <p className="text-2xl font-bold text-red-600">{totalRejected}</p>
          </div>
        </div>

        {/* Position Statistics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
          <h2 className="font-semibold text-lg p-4 border-b border-gray-100">
            Position-wise Statistics
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recruited
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interview
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rejected
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {positionStats.map((stat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {stat.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {stat.totalApplicants}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      {stat.recruited}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">
                      {stat.interview}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                      {stat.rejected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="font-semibold text-lg p-4 border-b border-gray-100">
            Student Applications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
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
                    GPA
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.college}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.branch}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.gpa}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          student.status === "Recruited"
                            ? "bg-green-100 text-green-800"
                            : student.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
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
    </div>
  );
}
