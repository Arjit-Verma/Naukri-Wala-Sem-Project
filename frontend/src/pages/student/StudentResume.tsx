import StakeNavBar from "../../functions/StakeNavBar";
import { useState } from "react";
import { MenuItem2 } from "../../types";

type Template = {
  id: number;
  name: string;
  thumbnail: string;
  selected: boolean;
};

type ResumeData = {
  name: string;
  email: string;
  experience: string;
  education: string;
  skills: string[];
};

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/student/dashboard" },
  { id: 1, title: "Resume", link: "/student/resume" },
  { id: 2, title: "ATS Score", link: "/student/ats_score" },
  { id: 3, title: "Templates", link: "/student/coldmail" },
  { id: 4, title: "Company", link: "/student/companylist" },
];

const StudentResume = () => {
  const [activeTab, setActiveTab] = useState<"templates" | "editor">(
    "templates"
  );
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "",
    email: "",
    experience: "",
    education: "",
    skills: [],
  });
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, name: "Professional", thumbnail: "template1", selected: false },
    { id: 2, name: "Modern", thumbnail: "template2", selected: false },
    { id: 3, name: "Creative", thumbnail: "template3", selected: false },
    { id: 4, name: "Minimal", thumbnail: "template4", selected: false },
  ]);

  const handleTemplateSelect = (id: number) => {
    console.log("Template selected:", id); // Debugging statement
    setSelectedTemplate(id);
    setTemplates((prevTemplates) =>
      prevTemplates.map((template) => ({
        ...template,
        selected: template.id === id,
      }))
    );
    console.log("Updated selectedTemplate state:", id); // Debugging statement
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setResumeData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const enhanceWithAI = () => {
    // AI enhancement logic would go here
    alert("AI enhancement feature would be implemented here");
  };

  const downloadResume = () => {
    // Download logic would go here
    alert("Download feature would be implemented here");
  };

  console.log("Current selectedTemplate state:", selectedTemplate); // Debugging statement

  return (
    <div>
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
      <div className="max-w-6xl p-6 pt-20 bg-white rounded-xl shadow-md">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "templates"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("templates")}
          >
            Choose Template
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "editor"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("editor")}
            disabled={!selectedTemplate}
          >
            Edit Resume
          </button>
        </div>

        {activeTab === "templates" ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Choose a Resume Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`border-2 rounded-lg overflow-hidden transition-all cursor-pointer ${
                    template.selected
                      ? "border-primary-500 ring-2 ring-primary-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <div className="bg-gray-100 h-48 flex items-center justify-center">
                    <img
                      src="https://th.bing.com/th/id/OIP.hWEobj_lmMrfbXmD1VCIawHaKd?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-30"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800">
                      {template.name}
                    </h3>
                    <button
                      className={`mt-2 w-full py-1 rounded ${
                        template.selected
                          ? "bg-primary-500 text-black"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {template.selected ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">
                    Enhance Using AI
                  </h3>
                  <p className="text-blue-600">
                    Let our AI optimize your resume for the job you're applying
                    for
                  </p>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={enhanceWithAI}
                    disabled={!selectedTemplate}
                  >
                    Enhance My Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Edit Your Resume
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={resumeData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={resumeData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={resumeData.experience}
                    onChange={handleInputChange}
                    placeholder="Your Work Experience"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="education"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Education
                  </label>
                  <textarea
                    id="education"
                    name="education"
                    value={resumeData.education}
                    onChange={handleInputChange}
                    placeholder="Your Education"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="skills"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={resumeData.skills.join(", ")}
                    onChange={handleSkillsChange}
                    placeholder="Your Skills (comma separated)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Separate skills with commas (e.g., JavaScript, React, CSS)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Preview
                </h2>
                <div className="border border-gray-200 rounded-lg p-6 h-full min-h-[500px] bg-gray-50">
                  {selectedTemplate ? (
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {resumeData.name || "Your Name"}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {resumeData.email || "your.email@example.com"}
                      </p>

                      {resumeData.experience && (
                        <>
                          <h4 className="text-lg font-semibold mt-4 mb-2 border-b pb-1">
                            Experience
                          </h4>
                          <p className="whitespace-pre-line">
                            {resumeData.experience}
                          </p>
                        </>
                      )}

                      {resumeData.education && (
                        <>
                          <h4 className="text-lg font-semibold mt-4 mb-2 border-b pb-1">
                            Education
                          </h4>
                          <p className="whitespace-pre-line">
                            {resumeData.education}
                          </p>
                        </>
                      )}

                      {resumeData.skills.length > 0 && (
                        <>
                          <h4 className="text-lg font-semibold mt-4 mb-2 border-b pb-1">
                            Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Select a template and fill in your details to see the
                      preview
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    onClick={downloadResume}
                    disabled={!selectedTemplate}
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentResume;
