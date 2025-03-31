// src/components/CollegeTable.tsx
import CompanyNavBar from "../../components/company/CompanyNavBar";
import { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaTimes, FaPlus } from "react-icons/fa";
import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];

type College = {
  id: number;
  collegeName: string;
  location: string;
  dateOfRecruitment: string;
  status: "Confirmed" | "Cancelled";
};

export default function CompanyCollegeInfo() {
  const [colleges, setColleges] = useState<College[]>([
    {
      id: 1,
      collegeName: "ABC Engineering College",
      location: "New York",
      dateOfRecruitment: "2023-10-15",
      status: "Confirmed",
    },
    {
      id: 2,
      collegeName: "XYZ University",
      location: "Los Angeles",
      dateOfRecruitment: "2023-10-18",
      status: "Confirmed",
    },
    {
      id: 3,
      collegeName: "Tech Institute",
      location: "Chicago",
      dateOfRecruitment: "2023-10-20",
      status: "Cancelled",
    },
    {
      id: 4,
      collegeName: "Future Leaders Academy",
      location: "Houston",
      dateOfRecruitment: "2023-10-22",
      status: "Confirmed",
    },
    {
      id: 5,
      collegeName: "Global Business School",
      location: "Miami",
      dateOfRecruitment: "2023-10-25",
      status: "Confirmed",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<College>>({});
  const [newCollege, setNewCollege] = useState<Omit<College, "id">>({
    collegeName: "",
    location: "",
    dateOfRecruitment: "",
    status: "Confirmed",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEdit = (college: College) => {
    setEditingId(college.id);
    setEditData({ ...college });
  };

  const handleSave = (id: number) => {
    setColleges(
      colleges.map((college) =>
        college.id === id ? { ...college, ...editData } : college
      )
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setColleges(colleges.filter((college) => college.id !== id));
  };

  const handleAdd = () => {
    const newId = Math.max(...colleges.map((c) => c.id), 0) + 1;
    setColleges([...colleges, { id: newId, ...newCollege }]);
    setNewCollege({
      collegeName: "",
      location: "",
      dateOfRecruitment: "",
      status: "Confirmed",
    });
    setShowAddForm(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleNewInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewCollege({
      ...newCollege,
      [name]: value,
    });
  };

  return (
    <div>
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      <div className="container mx-auto p-4 pt-20 h-screen">
        <h1 className="text-2xl font-bold mb-6">College Recruitment List</h1>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Add New College
        </button>

        {showAddForm && (
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-3">Add New College</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  College Name
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={newCollege.collegeName}
                  onChange={handleNewInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={newCollege.location}
                  onChange={handleNewInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="dateOfRecruitment"
                  value={newCollege.dateOfRecruitment}
                  onChange={handleNewInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={newCollege.status}
                  onChange={handleNewInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <FaTimes className="mr-2" /> Cancel
              </button>
              <button
                onClick={handleAdd}
                disabled={
                  !newCollege.collegeName ||
                  !newCollege.location ||
                  !newCollege.dateOfRecruitment
                }
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center disabled:bg-green-300"
              >
                <FaCheck className="mr-2" /> Add College
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  College Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date of Recruitment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {colleges.map((college) => (
                <tr key={college.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === college.id ? (
                      <input
                        type="text"
                        name="collegeName"
                        value={editData.collegeName || college.collegeName}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                      />
                    ) : (
                      college.collegeName
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === college.id ? (
                      <input
                        type="text"
                        name="location"
                        value={editData.location || college.location}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                      />
                    ) : (
                      college.location
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === college.id ? (
                      <input
                        type="date"
                        name="dateOfRecruitment"
                        value={
                          editData.dateOfRecruitment ||
                          college.dateOfRecruitment
                        }
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                      />
                    ) : (
                      college.dateOfRecruitment
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === college.id ? (
                      <select
                        name="status"
                        value={editData.status || college.status}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          college.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {college.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {editingId === college.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave(college.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(college)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(college.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
