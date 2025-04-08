import { useState, useEffect } from "react";
import { Upload, Edit, Save, X, Plus } from "lucide-react";
import CollegeNavBar from "../../components/college/CollegeNavBar";
import collegeImage from "../../assets/college.jpg";
import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/college/dashboard" },
  { id: 1, title: "Stats", link: "/college/stats" },
  { id: 2, title: "Student Info", link: "/college/studentinfo" },
  { id: 3, title: "Company Info", link: "/college/companyinfo" },
];

interface CollegeProfile {
  name: string;
  email: string;
  address: string;
  website: string;
  contactNumber: string;
  accreditation: string;
  establishedYear: number;
  departments: string[];
  facilities: string[];
  placementStats: {
    year: number;
    totalStudents: number;
    placedStudents: number;
    averagePackage: number;
    highestPackage: number;
  }[];
  keyContacts: { name: string; position: string; email: string }[];
}

export default function CollegeProfilePage() {
  const [profile, setProfile] = useState<CollegeProfile | null>(null);
  const [editing, setEditing] = useState<{
    field: string | null;
    index?: number;
    subField?: string;
  }>({ field: null });
  const [tempValue, setTempValue] = useState<string>("");
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setProfile({
        name: "Indian Institute of Information Technology, Dharwad",
        email: "admin@iiitdwd.ac.in",
        address: "Hubli-Dharwad, Karnataka, India",
        website: "https://iiitdwd.ac.in",
        contactNumber: "+91-836-2212345",
        accreditation: "AICTE, MHRD",
        establishedYear: 2015,
        departments: [
          "Computer Science and Engineering",
          "Electronics and Communication Engineering",
          "Data Science and Artificial Intelligence",
        ],
        facilities: [
          "24/7 Library",
          "High-speed Internet",
          "Sports Complex",
          "Hostel Accommodation",
          "Research Labs",
        ],
        placementStats: [
          {
            year: 2023,
            totalStudents: 120,
            placedStudents: 110,
            averagePackage: 12.5,
            highestPackage: 32.0,
          },
          {
            year: 2022,
            totalStudents: 90,
            placedStudents: 82,
            averagePackage: 10.8,
            highestPackage: 28.5,
          },
        ],
        keyContacts: [
          {
            name: "Dr. Rajesh Kumar",
            position: "Placement Officer",
            email: "placement@iiitdwd.ac.in",
          },
          {
            name: "Dr. Priya Sharma",
            position: "Dean Academics",
            email: "dean@iiitdwd.ac.in",
          },
        ],
      });
    }, 1000);
  }, []);

  const startEditing = (
    field: string,
    value: string,
    index?: number,
    subField?: string
  ) => {
    setEditing({ field, index, subField });
    setTempValue(value);
  };

  const cancelEditing = () => {
    setEditing({ field: null });
  };

  const saveEdit = () => {
    if (!profile) return;

    if (editing.field === "departments" && editing.index !== undefined) {
      const updatedDepartments = [...profile.departments];
      updatedDepartments[editing.index] = tempValue;
      setProfile({ ...profile, departments: updatedDepartments });
    } else if (editing.field === "facilities" && editing.index !== undefined) {
      const updatedFacilities = [...profile.facilities];
      updatedFacilities[editing.index] = tempValue;
      setProfile({ ...profile, facilities: updatedFacilities });
    } else if (
      editing.field === "placementStats" &&
      editing.index !== undefined &&
      editing.subField
    ) {
      const updatedStats = [...profile.placementStats];
      updatedStats[editing.index] = {
        ...updatedStats[editing.index],
        [editing.subField]: editing.subField.includes("Package")
          ? parseFloat(tempValue)
          : parseInt(tempValue),
      };
      setProfile({ ...profile, placementStats: updatedStats });
    } else if (
      editing.field === "keyContacts" &&
      editing.index !== undefined &&
      editing.subField
    ) {
      const updatedContacts = [...profile.keyContacts];
      updatedContacts[editing.index] = {
        ...updatedContacts[editing.index],
        [editing.subField]: tempValue,
      };
      setProfile({ ...profile, keyContacts: updatedContacts });
    } else if (editing.field === "establishedYear") {
      setProfile({ ...profile, establishedYear: parseInt(tempValue) });
    } else {
      // For simple string fields
      setProfile({
        ...profile,
        [editing.field as keyof CollegeProfile]: tempValue,
      });
    }

    setEditing({ field: null });
  };

  const addItem = (section: string) => {
    if (!profile) return;

    if (section === "departments" || section === "facilities") {
      if (newItem.trim()) {
        setProfile({
          ...profile,
          [section]: [
            ...(profile[section as keyof CollegeProfile] as string[]),
            newItem.trim(),
          ],
        });
        setNewItem("");
      }
    } else if (section === "placementStats") {
      setProfile({
        ...profile,
        placementStats: [
          ...profile.placementStats,
          {
            year: new Date().getFullYear(),
            totalStudents: 0,
            placedStudents: 0,
            averagePackage: 0,
            highestPackage: 0,
          },
        ],
      });
    } else if (section === "keyContacts") {
      setProfile({
        ...profile,
        keyContacts: [
          ...profile.keyContacts,
          {
            name: "New Contact",
            position: "Position",
            email: "email@college.edu",
          },
        ],
      });
    }
  };

  const removeItem = (section: string, index: number) => {
    if (!profile) return;

    if (section === "departments") {
      const updatedDepartments = [...profile.departments];
      updatedDepartments.splice(index, 1);
      setProfile({ ...profile, departments: updatedDepartments });
    } else if (section === "facilities") {
      const updatedFacilities = [...profile.facilities];
      updatedFacilities.splice(index, 1);
      setProfile({ ...profile, facilities: updatedFacilities });
    } else if (section === "placementStats") {
      const updatedStats = [...profile.placementStats];
      updatedStats.splice(index, 1);
      setProfile({ ...profile, placementStats: updatedStats });
    } else if (section === "keyContacts") {
      const updatedContacts = [...profile.keyContacts];
      updatedContacts.splice(index, 1);
      setProfile({ ...profile, keyContacts: updatedContacts });
    }
  };

  if (!profile) {
    return (
      <div className="h-full w-full flex flex-col bg-white">
        <CollegeNavBar menuItems={NavBarMenu}></CollegeNavBar>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <CollegeNavBar menuItems={NavBarMenu}></CollegeNavBar>
      <div className="pt-22 pb-10 px-5 bg-white min-h-screen max-w-6xl mx-auto">
        {/* College Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <img
              src={collegeImage}
              alt="college"
              className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {profile.name}
              </h1>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-sm text-gray-500 mt-1">
                Established: {profile.establishedYear}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-2 transition-colors">
              <Upload size={16} /> Upload Logo
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded flex items-center justify-center gap-2 transition-colors">
              <Edit size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* College Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Basic Info */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              College Name
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {profile.name}
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {profile.email}
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            {editing.field === "address" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={saveEdit}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={cancelEditing}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-700">{profile.address}</span>
                <button
                  onClick={() => startEditing("address", profile.address)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            {editing.field === "website" ? (
              <div className="flex gap-2">
                <input
                  type="url"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={saveEdit}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={cancelEditing}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {profile.website}
                </a>
                <button
                  onClick={() => startEditing("website", profile.website)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            {editing.field === "contactNumber" ? (
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={saveEdit}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={cancelEditing}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-700">{profile.contactNumber}</span>
                <button
                  onClick={() =>
                    startEditing("contactNumber", profile.contactNumber)
                  }
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Accreditation
            </label>
            {editing.field === "accreditation" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={saveEdit}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={cancelEditing}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-700">{profile.accreditation}</span>
                <button
                  onClick={() =>
                    startEditing("accreditation", profile.accreditation)
                  }
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Established Year
            </label>
            {editing.field === "establishedYear" ? (
              <div className="flex gap-2">
                <input
                  type="number"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                  min="1800"
                  max={new Date().getFullYear()}
                />
                <button
                  onClick={saveEdit}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  <Save size={16} />
                </button>
                <button
                  onClick={cancelEditing}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-700">{profile.establishedYear}</span>
                <button
                  onClick={() =>
                    startEditing(
                      "establishedYear",
                      profile.establishedYear.toString()
                    )
                  }
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Departments Section */}
          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Departments
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.departments.map((dept, index) =>
                  editing.field === "departments" && editing.index === index ? (
                    <div key={index} className="flex gap-2 items-center w-full">
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="p-2 border rounded flex-1"
                      />
                      <button
                        onClick={saveEdit}
                        className="p-2 bg-green-500 text-white rounded"
                      >
                        <Save size={16} />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="p-2 bg-red-500 text-white rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg w-full md:w-auto"
                    >
                      <span className="text-blue-800">{dept}</span>
                      <button
                        onClick={() => startEditing("departments", dept, index)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => removeItem("departments", index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Add new department"
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={() => addItem("departments")}
                  className="px-3 py-2 bg-blue-600 text-white rounded flex items-center gap-1"
                >
                  <Plus size={16} /> Add
                </button>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Facilities
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.facilities.map((facility, index) =>
                  editing.field === "facilities" && editing.index === index ? (
                    <div key={index} className="flex gap-2 items-center w-full">
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="p-2 border rounded flex-1"
                      />
                      <button
                        onClick={saveEdit}
                        className="p-2 bg-green-500 text-white rounded"
                      >
                        <Save size={16} />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="p-2 bg-red-500 text-white rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg w-full md:w-auto"
                    >
                      <span className="text-green-800">{facility}</span>
                      <button
                        onClick={() =>
                          startEditing("facilities", facility, index)
                        }
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => removeItem("facilities", index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Add new facility"
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={() => addItem("facilities")}
                  className="px-3 py-2 bg-blue-600 text-white rounded flex items-center gap-1"
                >
                  <Plus size={16} /> Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Placement Statistics Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Placement Statistics
            </h2>
            <button
              onClick={() => addItem("placementStats")}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Year
            </button>
          </div>
          <div className="border-t-2 border-gray-200 mb-4"></div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border-b">Year</th>
                  <th className="px-4 py-2 border-b">Total Students</th>
                  <th className="px-4 py-2 border-b">Placed Students</th>
                  <th className="px-4 py-2 border-b">Placement %</th>
                  <th className="px-4 py-2 border-b">Avg Package (LPA)</th>
                  <th className="px-4 py-2 border-b">Highest Package (LPA)</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {profile.placementStats.map((stat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {editing.field === "placementStats" &&
                    editing.index === index ? (
                      <>
                        <td className="px-4 py-2 border-b">
                          <input
                            type="number"
                            value={
                              editing.subField === "year"
                                ? tempValue
                                : stat.year.toString()
                            }
                            onChange={(e) => setTempValue(e.target.value)}
                            className="p-1 border rounded w-20"
                            onFocus={() =>
                              startEditing(
                                "placementStats",
                                stat.year.toString(),
                                index,
                                "year"
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border-b">
                          <input
                            type="number"
                            value={
                              editing.subField === "totalStudents"
                                ? tempValue
                                : stat.totalStudents.toString()
                            }
                            onChange={(e) => setTempValue(e.target.value)}
                            className="p-1 border rounded w-20"
                            onFocus={() =>
                              startEditing(
                                "placementStats",
                                stat.totalStudents.toString(),
                                index,
                                "totalStudents"
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border-b">
                          <input
                            type="number"
                            value={
                              editing.subField === "placedStudents"
                                ? tempValue
                                : stat.placedStudents.toString()
                            }
                            onChange={(e) => setTempValue(e.target.value)}
                            className="p-1 border rounded w-20"
                            onFocus={() =>
                              startEditing(
                                "placementStats",
                                stat.placedStudents.toString(),
                                index,
                                "placedStudents"
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border-b">
                          {(
                            (stat.placedStudents / stat.totalStudents) *
                            100
                          ).toFixed(1)}
                          %
                        </td>
                        <td className="px-4 py-2 border-b">
                          <input
                            type="number"
                            step="0.1"
                            value={
                              editing.subField === "averagePackage"
                                ? tempValue
                                : stat.averagePackage.toString()
                            }
                            onChange={(e) => setTempValue(e.target.value)}
                            className="p-1 border rounded w-20"
                            onFocus={() =>
                              startEditing(
                                "placementStats",
                                stat.averagePackage.toString(),
                                index,
                                "averagePackage"
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border-b">
                          <input
                            type="number"
                            step="0.1"
                            value={
                              editing.subField === "highestPackage"
                                ? tempValue
                                : stat.highestPackage.toString()
                            }
                            onChange={(e) => setTempValue(e.target.value)}
                            className="p-1 border rounded w-20"
                            onFocus={() =>
                              startEditing(
                                "placementStats",
                                stat.highestPackage.toString(),
                                index,
                                "highestPackage"
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border-b flex gap-2">
                          <button
                            onClick={saveEdit}
                            className="p-1 bg-green-500 text-white rounded"
                          >
                            <Save size={16} />
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="p-1 bg-red-500 text-white rounded"
                          >
                            <X size={16} />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-2 border-b">{stat.year}</td>
                        <td className="px-4 py-2 border-b">
                          {stat.totalStudents}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {stat.placedStudents}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {(
                            (stat.placedStudents / stat.totalStudents) *
                            100
                          ).toFixed(1)}
                          %
                        </td>
                        <td className="px-4 py-2 border-b">
                          {stat.averagePackage.toFixed(1)}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {stat.highestPackage.toFixed(1)}
                        </td>
                        <td className="px-4 py-2 border-b">
                          <button
                            onClick={() =>
                              startEditing("placementStats", "", index)
                            }
                            className="text-blue-600 hover:text-blue-800 mr-2"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => removeItem("placementStats", index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X size={16} />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Contacts Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Key Contacts
            </h2>
            <button
              onClick={() => addItem("keyContacts")}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 text-sm"
            >
              <Plus size={16} /> Add Contact
            </button>
          </div>
          <div className="border-t-2 border-gray-200 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.keyContacts.map((contact, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    {editing.field === "keyContacts" &&
                    editing.index === index &&
                    editing.subField === "name" ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="p-2 border rounded flex-1"
                        />
                        <button
                          onClick={saveEdit}
                          className="p-2 bg-green-500 text-white rounded"
                        >
                          <Save size={16} />
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">{contact.name}</p>
                        <button
                          onClick={() =>
                            startEditing(
                              "keyContacts",
                              contact.name,
                              index,
                              "name"
                            )
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={16} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    {editing.field === "keyContacts" &&
                    editing.index === index &&
                    editing.subField === "position" ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="p-2 border rounded flex-1"
                        />
                        <button
                          onClick={saveEdit}
                          className="p-2 bg-green-500 text-white rounded"
                        >
                          <Save size={16} />
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">{contact.position}</p>
                        <button
                          onClick={() =>
                            startEditing(
                              "keyContacts",
                              contact.position,
                              index,
                              "position"
                            )
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={16} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    {editing.field === "keyContacts" &&
                    editing.index === index &&
                    editing.subField === "email" ? (
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="p-2 border rounded flex-1"
                        />
                        <button
                          onClick={saveEdit}
                          className="p-2 bg-green-500 text-white rounded"
                        >
                          <Save size={16} />
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {contact.email}
                        </a>
                        <button
                          onClick={() =>
                            startEditing(
                              "keyContacts",
                              contact.email,
                              index,
                              "email"
                            )
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeItem("keyContacts", index)}
                  className="mt-3 text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <X size={14} /> Remove Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
