import { useState, useEffect } from "react";
import { Upload, Edit, Save, X, Plus } from "lucide-react";
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
  gpa: number;
  projects: { title: string; description: string }[];
  experience: { title: string; description: string }[];
  certificates: string[];
  backlogs: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState<{
    field: string | null;
    index?: number;
  }>({ field: null });
  const [tempValue, setTempValue] = useState<string>("");
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setProfile({
        name: "Sidhant Singh",
        email: "22bcs069@iiitdwd.ac.in",
        gender: "Male",
        college: "IIIT Dharwad",
        skills: ["React", "Node.js", "Python"],
        gpa: 8.55,
        projects: [
          { title: "Project 1", description: "Description of project 1" },
          { title: "Project 2", description: "Description of project 2" },
        ],
        experience: [
          { title: "Internship", description: "Summer internship at XYZ" },
        ],
        certificates: ["AWS Certified Cloud Practitioner"],
        backlogs: "No",
      });
    }, 1000);
  }, []);

  const startEditing = (field: string, value: string, index?: number) => {
    setEditing({ field, index });
    setTempValue(value);
  };

  const cancelEditing = () => {
    setEditing({ field: null });
  };

  const saveEdit = () => {
    if (!profile) return;

    if (editing.field === "skills" && editing.index !== undefined) {
      const updatedSkills = [...profile.skills];
      updatedSkills[editing.index] = tempValue;
      setProfile({ ...profile, skills: updatedSkills });
    } else if (editing.field === "projects" && editing.index !== undefined) {
      const updatedProjects = [...profile.projects];
      if (editing.field.endsWith("Title")) {
        updatedProjects[editing.index].title = tempValue;
      } else {
        updatedProjects[editing.index].description = tempValue;
      }
      setProfile({ ...profile, projects: updatedProjects });
    } else if (editing.field === "experience" && editing.index !== undefined) {
      const updatedExperience = [...profile.experience];
      if (editing.field.endsWith("Title")) {
        updatedExperience[editing.index].title = tempValue;
      } else {
        updatedExperience[editing.index].description = tempValue;
      }
      setProfile({ ...profile, experience: updatedExperience });
    } else if (
      editing.field === "certificates" &&
      editing.index !== undefined
    ) {
      const updatedCertificates = [...profile.certificates];
      updatedCertificates[editing.index] = tempValue;
      setProfile({ ...profile, certificates: updatedCertificates });
    } else if (editing.field === "gpa") {
      setProfile({ ...profile, gpa: parseFloat(tempValue) });
    } else if (editing.field === "backlogs") {
      setProfile({ ...profile, backlogs: tempValue });
    }

    setEditing({ field: null });
  };

  const addSkill = () => {
    if (newSkill.trim() && profile) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    if (profile) {
      const updatedSkills = [...profile.skills];
      updatedSkills.splice(index, 1);
      setProfile({ ...profile, skills: updatedSkills });
    }
  };

  const addItem = (section: string) => {
    if (!profile) return;

    const emptyItem = { title: "New Item", description: "Description" };
    if (section === "projects") {
      setProfile({
        ...profile,
        projects: [...profile.projects, emptyItem],
      });
    } else if (section === "experience") {
      setProfile({
        ...profile,
        experience: [...profile.experience, emptyItem],
      });
    } else if (section === "certificates") {
      setProfile({
        ...profile,
        certificates: [...profile.certificates, "New Certificate"],
      });
    }
  };

  const removeItem = (section: string, index: number) => {
    if (!profile) return;

    if (section === "projects") {
      const updatedProjects = [...profile.projects];
      updatedProjects.splice(index, 1);
      setProfile({ ...profile, projects: updatedProjects });
    } else if (section === "experience") {
      const updatedExperience = [...profile.experience];
      updatedExperience.splice(index, 1);
      setProfile({ ...profile, experience: updatedExperience });
    } else if (section === "certificates") {
      const updatedCertificates = [...profile.certificates];
      updatedCertificates.splice(index, 1);
      setProfile({ ...profile, certificates: updatedCertificates });
    }
  };

  if (!profile) {
    return (
      <div className="h-full w-full flex flex-col bg-white">
        <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
      <div className="pt-22 pb-10 px-5 bg-white min-h-screen max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <img
              src={student}
              alt="profile"
              className="h-24 w-24 rounded-full border-2 border-gray-200 object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {profile.name}
              </h1>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-sm text-gray-500 mt-1">{profile.college}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center gap-2 transition-colors">
              <Upload size={16} /> Upload Resume
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded flex items-center justify-center gap-2 transition-colors">
              <Edit size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Non-editable fields */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {profile.name}
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              College Name
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {profile.college}
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
              Gender
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {profile.gender}
            </div>
          </div>

          {/* Editable fields */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              GPA
            </label>
            {editing.field === "gpa" ? (
              <div className="flex gap-2">
                <input
                  type="number"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                  step="0.01"
                  min="0"
                  max="10"
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
                <span className="text-gray-700">
                  {profile.gpa.toFixed(2)} / 10
                </span>
                <button
                  onClick={() => startEditing("gpa", profile.gpa.toString())}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Backlogs
            </label>
            {editing.field === "backlogs" ? (
              <div className="flex gap-2">
                <select
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="p-2 border rounded flex-1"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
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
                <span className="text-gray-700">{profile.backlogs}</span>
                <button
                  onClick={() => startEditing("backlogs", profile.backlogs)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Skills Section */}
          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.skills.map((skill, index) =>
                  editing.field === "skills" && editing.index === index ? (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="p-1 border rounded"
                      />
                      <button
                        onClick={saveEdit}
                        className="p-1 bg-green-500 text-white rounded"
                      >
                        <Save size={14} />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="p-1 bg-red-500 text-white rounded"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-blue-800">{skill}</span>
                      <button
                        onClick={() => startEditing("skills", skill, index)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        onClick={() => removeSkill(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add new skill"
                  className="p-2 border rounded flex-1"
                />
                <button
                  onClick={addSkill}
                  className="px-3 py-2 bg-blue-600 text-white rounded flex items-center gap-1"
                >
                  <Plus size={16} /> Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sections: Projects, Experience, Certificates */}
        {[
          {
            title: "Projects",
            data: profile.projects,
            section: "projects",
            fields: ["title", "description"],
          },
          {
            title: "Experience",
            data: profile.experience,
            section: "experience",
            fields: ["title", "description"],
          },
          {
            title: "Certificates",
            data: profile.certificates,
            section: "certificates",
            fields: ["name"],
          },
        ].map(({ title, data, section, fields }) => (
          <div key={section} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <button
                onClick={() => addItem(section)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 text-sm"
              >
                <Plus size={16} /> Add
              </button>
            </div>
            <div className="border-t-2 border-gray-200 mb-4"></div>
            <div className="space-y-4">
              {data.length === 0 ? (
                <p className="text-gray-500 italic">
                  No {title.toLowerCase()} added yet
                </p>
              ) : (
                data.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    {fields.map((field) => {
                      const value =
                        typeof item === "string"
                          ? item
                          : item[field as keyof typeof item];
                      const editingKey = `${section}${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`;

                      return (
                        <div key={field} className="mb-3 last:mb-0">
                          <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                            {field}
                          </label>
                          {editing.field === editingKey &&
                          editing.index === index ? (
                            <div className="flex gap-2">
                              {field === "description" ? (
                                <textarea
                                  value={tempValue}
                                  onChange={(e) => setTempValue(e.target.value)}
                                  className="p-2 border rounded flex-1"
                                  rows={3}
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={tempValue}
                                  onChange={(e) => setTempValue(e.target.value)}
                                  className="p-2 border rounded flex-1"
                                />
                              )}
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
                            <div className="flex justify-between items-start">
                              <p className="text-gray-700 break-words flex-1">
                                {value || (
                                  <span className="italic text-gray-400">
                                    Not specified
                                  </span>
                                )}
                              </p>
                              <button
                                onClick={() =>
                                  startEditing(
                                    editingKey,
                                    value.toString(),
                                    index
                                  )
                                }
                                className="ml-2 text-blue-600 hover:text-blue-800"
                              >
                                <Edit size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <button
                      onClick={() => removeItem(section, index)}
                      className="mt-2 text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <X size={14} /> Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
