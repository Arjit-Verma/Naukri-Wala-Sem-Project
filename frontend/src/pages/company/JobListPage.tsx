import CompanyNavBar from "../../components/company/CompanyNavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem2 } from "../../types";
import { Trash2, ToggleLeft, ToggleRight } from "lucide-react";

type Job = {
  id: string;
  title: string;
  date: string;
  openings: number;
  acceptanceRate: string;
  dropoutRate?: string;
  status: "Open" | "Closed";
};

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];

const JobListPage = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Android Engineering Server",
      date: "15 July 2005",
      openings: 8,
      acceptanceRate: "0.2%",
      dropoutRate: "0.1%",
      status: "Open",
    },
    {
      id: "2",
      title: "Wireless Learning System",
      date: "21 Feb 2020",
      openings: 8,
      acceptanceRate: "0.2%",
      status: "Open",
    },
    {
      id: "3",
      title: "CyberSecurity Server",
      date: "29 Dec 2014",
      openings: 8,
      acceptanceRate: "0.2%",
      status: "Closed",
    },
    {
      id: "4",
      title: "Wireless Learning System",
      date: "21 Feb 2020",
      openings: 8,
      acceptanceRate: "0.2%",
      status: "Open",
    },
    {
      id: "5",
      title: "CyberSecurity Server",
      date: "29 Dec 2014",
      openings: 8,
      acceptanceRate: "0.2%",
      status: "Closed",
    },
    {
      id: "6",
      title: "Android Engineering Server",
      date: "15 July 2005",
      openings: 8,
      acceptanceRate: "0.2%",
      dropoutRate: "0.1%",
      status: "Open",
    },
    {
      id: "7",
      title: "Wireless Learning System",
      date: "21 Feb 2020",
      openings: 8,
      acceptanceRate: "0.2%",
      status: "Open",
    },
  ]);

  const toggleJobStatus = (id: string) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, status: job.status === "Open" ? "Closed" : "Open" }
          : job
      )
    );
  };

  const deleteJob = (id: string) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <CompanyNavBar menuItems={NavBarMenu} />
      <div className="p-6 pt-24 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Update Job</h1>
          <Link
            to={`\add`}
            className="border-4 hover:bg-blue-200 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Add Job
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-semibold text-gray-800">{job.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{job.date}</p>
                  </div>
                  <button
                    onClick={() => toggleJobStatus(job.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {job.status === "Open" ? (
                      <ToggleRight className="h-5 w-5 text-green-500" />
                    ) : (
                      <ToggleLeft className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Openings</p>
                    <p className="font-medium">{job.openings}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Acceptance</p>
                    <p className="font-medium">{job.acceptanceRate}</p>
                  </div>
                  {job.dropoutRate && (
                    <div>
                      <p className="text-xs text-gray-500">Dropout</p>
                      <p className="font-medium">{job.dropoutRate}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <Link
                      to={`/company/updatejob/edit/${job.id}`}
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`apply/${job.id}`}
                      className="text-xs text-green-600 hover:text-green-800 font-medium"
                    >
                      Apply to Colleges
                    </Link>
                  </div>
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListPage;
