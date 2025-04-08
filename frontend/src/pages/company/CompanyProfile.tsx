import { useState, useEffect } from "react";
import {
  Building2,
  Globe,
  Users,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Edit,
  Save,
  X,
  Plus,
  Trash2,
  ExternalLink,
  FileText,
  BarChart2,
  Calendar,
  Filter,
} from "lucide-react";
import CompanyNavBar from "../../components/company/CompanyNavBar";
import companyLogo from "../../assets/companylogo.png";
import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];
interface CompanyProfile {
  name: string;
  industry: string;
  description: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  headquarters: string;
  foundedYear: number;
  companySize: string;
  hiringContacts: {
    name: string;
    position: string;
    email: string;
    phone: string;
  }[];
  recruitingColleges: {
    id: number;
    name: string;
    location: string;
    nextVisit: string;
    contactPerson: string;
    status: "active" | "paused" | "exploring";
  }[];
  upcomingDrives: {
    id: number;
    college: string;
    date: string;
    positions: string[];
    status: "scheduled" | "completed" | "cancelled";
  }[];
}

export default function CompanyProfilePage() {
  const [profile, setProfile] = useState<CompanyProfile | null>(null);
  const [editing, setEditing] = useState<{
    field: string | null;
    index?: number;
    subField?: string;
  }>({ field: null });
  const [tempValue, setTempValue] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"profile" | "colleges" | "drives">(
    "profile"
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setProfile({
        name: "TechNova Solutions",
        industry: "Information Technology & Services",
        description:
          "Leading provider of enterprise software solutions with AI/ML capabilities",
        website: "https://technova.com",
        contactEmail: "hr@technova.com",
        contactPhone: "+1 (555) 123-4567",
        headquarters: "San Francisco, California",
        foundedYear: 2015,
        companySize: "501-1000 employees",
        hiringContacts: [
          {
            name: "Sarah Johnson",
            position: "Director of Talent Acquisition",
            email: "sarah.johnson@technova.com",
            phone: "+1 (555) 123-4568",
          },
          {
            name: "Michael Chen",
            position: "University Relations Manager",
            email: "michael.chen@technova.com",
            phone: "+1 (555) 123-4569",
          },
        ],
        recruitingColleges: [
          {
            id: 1,
            name: "Indian Institute of Technology, Bombay",
            location: "Mumbai, India",
            nextVisit: "2023-11-15",
            contactPerson: "Dr. Amit Sharma",
            status: "active",
          },
          {
            id: 2,
            name: "Stanford University",
            location: "Stanford, California",
            nextVisit: "2023-12-01",
            contactPerson: "Prof. Emily Wilson",
            status: "active",
          },
          {
            id: 3,
            name: "Indian Institute of Information Technology, Dharwad",
            location: "Dharwad, India",
            nextVisit: "2024-01-10",
            contactPerson: "Dr. Priya Patel",
            status: "exploring",
          },
          {
            id: 4,
            name: "Massachusetts Institute of Technology",
            location: "Cambridge, Massachusetts",
            nextVisit: "2024-02-05",
            contactPerson: "Dr. Robert Kim",
            status: "paused",
          },
        ],
        upcomingDrives: [
          {
            id: 1,
            college: "Indian Institute of Technology, Bombay",
            date: "2023-11-15",
            positions: [
              "Software Engineer",
              "Data Scientist",
              "Product Manager",
            ],
            status: "scheduled",
          },
          {
            id: 2,
            college: "Stanford University",
            date: "2023-12-01",
            positions: ["Research Scientist", "ML Engineer"],
            status: "scheduled",
          },
          {
            id: 3,
            college: "University of California, Berkeley",
            date: "2023-09-20",
            positions: ["Frontend Developer", "UX Designer"],
            status: "completed",
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

    if (
      editing.field === "hiringContacts" &&
      editing.index !== undefined &&
      editing.subField
    ) {
      const updatedContacts = [...profile.hiringContacts];
      updatedContacts[editing.index] = {
        ...updatedContacts[editing.index],
        [editing.subField]: tempValue,
      };
      setProfile({ ...profile, hiringContacts: updatedContacts });
    } else if (
      editing.field === "recruitingColleges" &&
      editing.index !== undefined &&
      editing.subField
    ) {
      const updatedColleges = [...profile.recruitingColleges];
      updatedColleges[editing.index] = {
        ...updatedColleges[editing.index],
        [editing.subField]:
          editing.subField === "status"
            ? (tempValue as "active" | "paused" | "exploring")
            : tempValue,
      };
      setProfile({ ...profile, recruitingColleges: updatedColleges });
    } else {
      // For simple string fields
      setProfile({
        ...profile,
        [editing.field as keyof CompanyProfile]: tempValue,
      });
    }

    setEditing({ field: null });
  };

  const addContact = () => {
    if (!profile) return;
    setProfile({
      ...profile,
      hiringContacts: [
        ...profile.hiringContacts,
        {
          name: "New Contact",
          position: "Position",
          email: "email@company.com",
          phone: "+1 (555) 000-0000",
        },
      ],
    });
  };

  const removeContact = (index: number) => {
    if (!profile) return;
    const updatedContacts = [...profile.hiringContacts];
    updatedContacts.splice(index, 1);
    setProfile({ ...profile, hiringContacts: updatedContacts });
  };

  const addCollege = () => {
    if (!profile) return;
    setProfile({
      ...profile,
      recruitingColleges: [
        ...profile.recruitingColleges,
        {
          id: Math.max(...profile.recruitingColleges.map((c) => c.id)) + 1,
          name: "New College",
          location: "City, Country",
          nextVisit: new Date().toISOString().split("T")[0],
          contactPerson: "Contact Name",
          status: "exploring",
        },
      ],
    });
  };

  const removeCollege = (id: number) => {
    if (!profile) return;
    setProfile({
      ...profile,
      recruitingColleges: profile.recruitingColleges.filter(
        (college) => college.id !== id
      ),
    });
  };

  const filteredColleges = profile?.recruitingColleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!profile) {
    return (
      <div className="h-full w-full flex flex-col bg-white">
        <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      <div className="pt-20 pb-10 px-5 bg-white min-h-screen max-w-7xl mx-auto">
        {/* Company Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <img
              src="https://technova.behonbaker.com/logo-black.png"
              alt="company logo"
              className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {profile.name}
              </h1>
              <p className="text-gray-600">{profile.industry}</p>
              <p className="text-sm text-gray-500 mt-1">
                Founded: {profile.foundedYear} | {profile.companySize}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-2 transition-colors">
              <ExternalLink size={16} /> Visit Website
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded flex items-center justify-center gap-2 transition-colors">
              <Edit size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("profile")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "profile"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Company Profile
            </button>
            <button
              onClick={() => setActiveTab("colleges")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "colleges"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Recruiting Colleges ({profile.recruitingColleges.length})
            </button>
            <button
              onClick={() => setActiveTab("drives")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "drives"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Upcoming Drives (
              {
                profile.upcomingDrives.filter((d) => d.status === "scheduled")
                  .length
              }
              )
            </button>
          </nav>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                  {profile.name}
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                  {profile.industry}
                </div>
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                {editing.field === "description" ? (
                  <div className="flex flex-col gap-2">
                    <textarea
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="p-2 border rounded flex-1"
                      rows={4}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="px-3 py-1 bg-green-500 text-white rounded flex items-center gap-1"
                      >
                        <Save size={16} /> Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="px-3 py-1 bg-red-500 text-white rounded flex items-center gap-1"
                      >
                        <X size={16} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-gray-700">{profile.description}</p>
                    <button
                      onClick={() =>
                        startEditing("description", profile.description)
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
                  Website
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {profile.website} <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Headquarters
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                  {profile.headquarters}
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <a
                    href={`mailto:${profile.contactEmail}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {profile.contactEmail} <Mail size={14} />
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Contact Phone
                </label>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <a
                    href={`tel:${profile.contactPhone}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {profile.contactPhone} <Phone size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Hiring Contacts */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Hiring Contacts
                </h2>
                <button
                  onClick={addContact}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 text-sm"
                >
                  <Plus size={16} /> Add Contact
                </button>
              </div>
              <div className="border-t border-gray-200 mb-4"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {profile.hiringContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg border border-gray-200 p-4"
                  >
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        {editing.field === "hiringContacts" &&
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
                                  "hiringContacts",
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
                        {editing.field === "hiringContacts" &&
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
                                  "hiringContacts",
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
                        {editing.field === "hiringContacts" &&
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
                                  "hiringContacts",
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

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        {editing.field === "hiringContacts" &&
                        editing.index === index &&
                        editing.subField === "phone" ? (
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
                          <div className="flex justify-between items-center">
                            <a
                              href={`tel:${contact.phone}`}
                              className="text-blue-600 hover:underline"
                            >
                              {contact.phone}
                            </a>
                            <button
                              onClick={() =>
                                startEditing(
                                  "hiringContacts",
                                  contact.phone,
                                  index,
                                  "phone"
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
                      onClick={() => removeContact(index)}
                      className="mt-3 text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <Trash2 size={14} /> Remove Contact
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Colleges Tab */}
        {activeTab === "colleges" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search colleges..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={addCollege}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Add College
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      College Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Next Visit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Person
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredColleges?.map((college) => (
                    <tr key={college.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {college.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {college.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {new Date(college.nextVisit).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {college.contactPerson}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            college.status === "active"
                              ? "bg-green-100 text-green-800"
                              : college.status === "paused"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {college.status.charAt(0).toUpperCase() +
                            college.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => removeCollege(college.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Drives Tab */}
        {activeTab === "drives" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                  <Filter size={16} /> Filters
                </button>
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>All Statuses</option>
                  <option>Scheduled</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-2">
                <Plus size={16} /> Schedule Drive
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.upcomingDrives.map((drive) => (
                <div
                  key={drive.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                >
                  <div
                    className={`px-4 py-3 ${
                      drive.status === "scheduled"
                        ? "bg-blue-600"
                        : drive.status === "completed"
                        ? "bg-green-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {drive.college}
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-gray-500" />
                      <span className="text-gray-700">
                        {new Date(drive.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Positions Hiring:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {drive.positions.map((position, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {position}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          drive.status === "scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : drive.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {drive.status.charAt(0).toUpperCase() +
                          drive.status.slice(1)}
                      </span>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={16} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <BarChart2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
