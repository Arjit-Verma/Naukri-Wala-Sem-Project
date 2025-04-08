import { useState } from "react";
import { saveAs } from "file-saver";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import StakeNavBar from "../../functions/StakeNavBar";
import { MenuItem2 } from "../../types";

// Types
type Template = {
  id: number;
  name: string;
  thumbnail: string;
  selected: boolean;
};

type Project = {
  name: string;
  description: string;
  technologies: string;
  duration: string;
};

type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string[];
};

type Education = {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
};

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
};

// Navbar menu items
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
    name: "Jake Ryan",
    email: "jake@su.edu",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/jake",
    github: "github.com/jake",
    skills: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"],
    experience: [
      {
        company: "Texas A&M University",
        position: "Undergraduate Research Assistant",
        duration: "June 2020 -- Present",
        description: [
          "Developed a REST API using FastAPI and PostgreSQL",
          "Built full-stack web application with Flask, React, PostgreSQL",
          "Visualized GitHub collaboration in classroom settings",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Arts in Computer Science",
        institution: "Southwestern University",
        duration: "Aug. 2018 -- May 2021",
        gpa: "3.8",
      },
    ],
    projects: [
      {
        name: "Gitlytics",
        description: "Full-stack web application for GitHub data analysis",
        technologies: "Python, Flask, React, PostgreSQL, Docker",
        duration: "June 2020 -- Present",
      },
    ],
  });

  const [templates, setTemplates] = useState<Template[]>([
    {
      id: 1,
      name: "Jake's Professional",
      thumbnail: "jakes-template",
      selected: true,
    },
    {
      id: 2,
      name: "Jake's Modern",
      thumbnail: "jakes-template",
      selected: false,
    },
    {
      id: 3,
      name: "Jake's Clean",
      thumbnail: "jakes-template",
      selected: false,
    },
    {
      id: 4,
      name: "Jake's Minimal",
      thumbnail: "jakes-template",
      selected: false,
    },
  ]);

  // Form handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (value: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: value.split(",").map((item) => item.trim()),
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          duration: "",
          description: [""],
        },
      ],
    }));
  };

  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string | string[]
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.experience];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, experience: updated };
    });
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          institution: "",
          duration: "",
          gpa: "",
        },
      ],
    }));
  };

  const updateEducation = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.education];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, education: updated };
    });
  };

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          description: "",
          technologies: "",
          duration: "",
        },
      ],
    }));
  };

  const updateProject = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.projects];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, projects: updated };
    });
  };

  const handleTemplateSelect = (id: number) => {
    setTemplates((prev) =>
      prev.map((t) => ({
        ...t,
        selected: t.id === id,
      }))
    );
  };

  // LaTeX Generation (Jake's Template)
  const generateLatexResume = () => {
    const escapeLatex = (str: string) => {
      if (!str) return "";
      return str
        .replace(/\\/g, "\\textbackslash")
        .replace(/&/g, "\\&")
        .replace(/%/g, "\\%")
        .replace(/\$/g, "\\$")
        .replace(/#/g, "\\#")
        .replace(/_/g, "\\_")
        .replace(/\{/g, "\\{")
        .replace(/\}/g, "\\}")
        .replace(/~/g, "\\textasciitilde")
        .replace(/\^/g, "\\textasciicircum");
    };

    const formatDescription = (desc: string[]) => {
      return desc
        .map((item) => `\\resumeItem{${escapeLatex(item)}}`)
        .join("\n");
    };

    return `\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape ${escapeLatex(
      resumeData.name
    )}} \\\\ \\vspace{1pt}
    \\small ${escapeLatex(resumeData.phone)} $|$ \\href{mailto:${escapeLatex(
      resumeData.email
    )}}{\\underline{${escapeLatex(resumeData.email)}}} $|$ 
    \\href{https://${escapeLatex(
      resumeData.linkedin
    )}}{\\underline{${escapeLatex(resumeData.linkedin)}}} $|$
    \\href{https://${escapeLatex(resumeData.github)}}{\\underline{${escapeLatex(
      resumeData.github
    )}}}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    ${resumeData.education
      .map(
        (edu) => `
    \\resumeSubheading
      {${escapeLatex(edu.institution)}}{${escapeLatex(edu.duration)}}
      {${escapeLatex(edu.degree)}${
          edu.gpa ? `, GPA: ${escapeLatex(edu.gpa)}` : ""
        }}{}
    `
      )
      .join("")}
  \\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
    ${resumeData.experience
      .map(
        (exp) => `
    \\resumeSubheading
      {${escapeLatex(exp.company)}}{${escapeLatex(exp.duration)}}
      {${escapeLatex(exp.position)}}{}
      \\resumeItemListStart
        ${formatDescription(exp.description)}
      \\resumeItemListEnd
    `
      )
      .join("")}
  \\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
      ${resumeData.projects
        .map(
          (proj) => `
      \\resumeProjectHeading
          {\\textbf{${escapeLatex(proj.name)}} $|$ \\emph{${escapeLatex(
            proj.technologies
          )}}}{${escapeLatex(proj.duration)}}
          \\resumeItemListStart
            \\resumeItem{${escapeLatex(proj.description)}}
          \\resumeItemListEnd
      `
        )
        .join("")}
    \\resumeSubHeadingListEnd

%-----------PROGRAMMING SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: ${resumeData.skills.join(", ")}}
    }}
 \\end{itemize}

\\end{document}`;
  };

  const downloadLatexResume = () => {
    const latexContent = generateLatexResume();
    const blob = new Blob([latexContent], { type: "text/plain" });
    saveAs(blob, `${resumeData.name.replace(/\s+/g, "_") || "resume"}.tex`);
  };

  // PDF Generation
  const ResumePDF = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.name || "Your Name"}</Text>
          <Text style={styles.contact}>
            {[resumeData.phone, resumeData.email].filter(Boolean).join(" | ")}
          </Text>
          <Text style={styles.links}>
            {resumeData.linkedin && `LinkedIn: ${resumeData.linkedin}`}
            {resumeData.github && ` | GitHub: ${resumeData.github}`}
          </Text>
        </View>

        {resumeData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {resumeData.education.map((edu, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.subheading}>
                  <Text>{edu.institution}</Text>
                  <Text>{edu.duration}</Text>
                </View>
                <Text style={styles.content}>
                  {edu.degree}
                  {edu.gpa && `, GPA: ${edu.gpa}`}
                </Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {resumeData.experience.map((exp, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.subheading}>
                  <Text>{exp.company}</Text>
                  <Text>{exp.duration}</Text>
                </View>
                <Text style={styles.position}>{exp.position}</Text>
                <View style={styles.description}>
                  {exp.description.map((desc, j) => (
                    <Text key={j} style={styles.bulletItem}>
                      • {desc}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {resumeData.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {resumeData.projects.map((proj, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.subheading}>
                  <Text>{proj.name}</Text>
                  <Text>{proj.duration}</Text>
                </View>
                <Text style={styles.tech}>
                  Technologies: {proj.technologies}
                </Text>
                <Text style={styles.content}>{proj.description}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
            <Text style={styles.content}>{resumeData.skills.join(", ")}</Text>
          </View>
        )}
      </Page>
    </Document>
  );

  const downloadPDF = async () => {
    try {
      const blob = await pdf(ResumePDF()).toBlob();
      saveAs(blob, `${resumeData.name.replace(/\s+/g, "_") || "resume"}.pdf`);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  // PDF Styles
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontFamily: "Helvetica",
    },
    header: {
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#112131",
      paddingBottom: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 5,
      textAlign: "center",
    },
    contact: {
      fontSize: 10,
      textAlign: "center",
      marginBottom: 3,
    },
    links: {
      fontSize: 10,
      textAlign: "center",
    },
    section: {
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#2c3e50",
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
      paddingBottom: 3,
    },
    item: {
      marginBottom: 10,
    },
    subheading: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    position: {
      fontSize: 11,
      fontStyle: "italic",
      marginBottom: 5,
    },
    content: {
      fontSize: 10,
      lineHeight: 1.4,
      marginBottom: 5,
    },
    description: {
      marginLeft: 10,
    },
    bulletItem: {
      fontSize: 10,
      marginBottom: 3,
    },
    tech: {
      fontSize: 9,
      fontStyle: "italic",
      marginBottom: 5,
    },
  });

  return (
    <div>
      <StakeNavBar menuItems={NavBarMenu} />
      <div className="max-w-7xl mx-auto p-6 pt-20 h-screen overflow-auto">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "templates"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("templates")}
          >
            Choose Template
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "editor"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("editor")}
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
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <div className="bg-gray-100 h-48 flex items-center justify-center">
                    {/* Replace this div with your template image */}
                    <img
                      src="data:image/jpeg;base64,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" // Update this path to your actual image
                      alt={`${template.name} Template`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800">
                      {template.name}
                    </h3>
                    <button
                      className={`mt-2 w-full py-1 rounded ${
                        template.selected
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {template.selected ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Section title="Basic Information">
                <TextInput
                  label="Full Name"
                  value={resumeData.name}
                  onChange={(e) => handleInputChange(e)}
                  name="name"
                />
                <TextInput
                  label="Email"
                  value={resumeData.email}
                  onChange={(e) => handleInputChange(e)}
                  name="email"
                />
                <TextInput
                  label="Phone"
                  value={resumeData.phone}
                  onChange={(e) => handleInputChange(e)}
                  name="phone"
                />
                <TextInput
                  label="LinkedIn"
                  value={resumeData.linkedin}
                  onChange={(e) => handleInputChange(e)}
                  name="linkedin"
                />
                <TextInput
                  label="GitHub"
                  value={resumeData.github}
                  onChange={(e) => handleInputChange(e)}
                  name="github"
                />
              </Section>

              <Section title="Skills">
                <TextInput
                  label="Skills (comma separated)"
                  value={resumeData.skills.join(", ")}
                  onChange={(e) => handleSkillsChange(e.target.value)}
                />
              </Section>

              <Section title="Experience" onAdd={addExperience}>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <TextInput
                        label="Company"
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(index, "company", e.target.value)
                        }
                      />
                      <TextInput
                        label="Position"
                        value={exp.position}
                        onChange={(e) =>
                          updateExperience(index, "position", e.target.value)
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <TextInput
                        label="Duration"
                        value={exp.duration}
                        onChange={(e) =>
                          updateExperience(index, "duration", e.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      {exp.description.map((desc, i) => (
                        <div key={i} className="flex mb-2">
                          <textarea
                            value={desc}
                            onChange={(e) => {
                              const updated = [...exp.description];
                              updated[i] = e.target.value;
                              updateExperience(index, "description", updated);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            rows={2}
                          />
                          <button
                            onClick={() => {
                              const updated = [...exp.description];
                              updated.splice(i, 1);
                              updateExperience(index, "description", updated);
                            }}
                            className="ml-2 text-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const updated = [...exp.description, ""];
                          updateExperience(index, "description", updated);
                        }}
                        className="text-sm text-blue-600"
                      >
                        + Add Description Item
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        const updated = [...resumeData.experience];
                        updated.splice(index, 1);
                        setResumeData({ ...resumeData, experience: updated });
                      }}
                      className="mt-2 text-red-600 text-sm"
                    >
                      Remove Experience
                    </button>
                  </div>
                ))}
              </Section>

              <Section title="Education" onAdd={addEducation}>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <TextInput
                        label="Institution"
                        value={edu.institution}
                        onChange={(e) =>
                          updateEducation(index, "institution", e.target.value)
                        }
                      />
                      <TextInput
                        label="Degree"
                        value={edu.degree}
                        onChange={(e) =>
                          updateEducation(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <TextInput
                        label="Duration"
                        value={edu.duration}
                        onChange={(e) =>
                          updateEducation(index, "duration", e.target.value)
                        }
                      />
                      <TextInput
                        label="GPA"
                        value={edu.gpa || ""}
                        onChange={(e) =>
                          updateEducation(index, "gpa", e.target.value)
                        }
                      />
                    </div>
                    <button
                      onClick={() => {
                        const updated = [...resumeData.education];
                        updated.splice(index, 1);
                        setResumeData({ ...resumeData, education: updated });
                      }}
                      className="mt-2 text-red-600 text-sm"
                    >
                      Remove Education
                    </button>
                  </div>
                ))}
              </Section>

              <Section title="Projects" onAdd={addProject}>
                {resumeData.projects.map((proj, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <TextInput
                      label="Project Name"
                      value={proj.name}
                      onChange={(e) =>
                        updateProject(index, "name", e.target.value)
                      }
                    />
                    <TextAreaInput
                      label="Description"
                      value={proj.description}
                      onChange={(e) =>
                        updateProject(index, "description", e.target.value)
                      }
                    />
                    <TextInput
                      label="Technologies Used"
                      value={proj.technologies}
                      onChange={(e) =>
                        updateProject(index, "technologies", e.target.value)
                      }
                    />
                    <TextInput
                      label="Duration"
                      value={proj.duration}
                      onChange={(e) =>
                        updateProject(index, "duration", e.target.value)
                      }
                    />
                    <button
                      onClick={() => {
                        const updated = [...resumeData.projects];
                        updated.splice(index, 1);
                        setResumeData({ ...resumeData, projects: updated });
                      }}
                      className="mt-2 text-red-600 text-sm"
                    >
                      Remove Project
                    </button>
                  </div>
                ))}
              </Section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Resume Preview</h3>
                  <div className="border border-gray-300 rounded p-4 min-h-[500px] bg-gray-50">
                    <h4 className="text-lg font-bold text-center">
                      {resumeData.name || "Your Name"}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {[resumeData.phone, resumeData.email]
                        .filter(Boolean)
                        .join(" | ")}
                    </p>
                    <p className="text-gray-600 text-sm text-center">
                      {resumeData.linkedin &&
                        `LinkedIn: ${resumeData.linkedin}`}
                      {resumeData.github && ` | GitHub: ${resumeData.github}`}
                    </p>
                    <div className="mt-4 space-y-6">
                      {resumeData.education.length > 0 && (
                        <div>
                          <h5 className="font-semibold border-b pb-1">
                            EDUCATION
                          </h5>
                          {resumeData.education.map((edu, i) => (
                            <div key={i} className="mb-3">
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  {edu.institution}
                                </span>
                                <span className="text-gray-500 text-sm">
                                  {edu.duration}
                                </span>
                              </div>
                              <p className="text-sm italic">{edu.degree}</p>
                              {edu.gpa && (
                                <p className="text-sm">GPA: {edu.gpa}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {resumeData.experience.length > 0 && (
                        <div>
                          <h5 className="font-semibold border-b pb-1">
                            EXPERIENCE
                          </h5>
                          {resumeData.experience.map((exp, i) => (
                            <div key={i} className="mb-3">
                              <div className="flex justify-between">
                                <span className="font-medium">
                                  {exp.company}
                                </span>
                                <span className="text-gray-500 text-sm">
                                  {exp.duration}
                                </span>
                              </div>
                              <p className="text-sm italic">{exp.position}</p>
                              <ul className="list-disc list-inside text-sm">
                                {exp.description.map((desc, j) => (
                                  <li key={j}>{desc}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {resumeData.projects.length > 0 && (
                        <div>
                          <h5 className="font-semibold border-b pb-1">
                            PROJECTS
                          </h5>
                          {resumeData.projects.map((proj, i) => (
                            <div key={i} className="mb-3">
                              <div className="flex justify-between">
                                <span className="font-medium">{proj.name}</span>
                                <span className="text-gray-500 text-sm">
                                  {proj.duration}
                                </span>
                              </div>
                              <p className="text-sm">{proj.description}</p>
                              <p className="text-sm text-gray-600">
                                Tech: {proj.technologies}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {resumeData.skills.length > 0 && (
                        <div>
                          <h5 className="font-semibold border-b pb-1">
                            TECHNICAL SKILLS
                          </h5>
                          <p className="text-sm">
                            {resumeData.skills.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <button
                    onClick={downloadLatexResume}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Download LaTeX File
                  </button>
                  <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Download PDF
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

// Helper components
const Section = ({
  title,
  children,
  onAdd,
}: {
  title: string;
  children: React.ReactNode;
  onAdd?: () => void;
}) => (
  <div className="border rounded-lg p-4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {onAdd && (
        <button
          onClick={onAdd}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          + Add
        </button>
      )}
    </div>
    {children}
  </div>
);

const TextInput = ({
  label,
  value,
  onChange,
  name,
  ...props
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
      value={value}
      onChange={onChange}
      name={name}
      {...props}
    />
  </div>
);

const TextAreaInput = ({
  label,
  value,
  onChange,
  name,
  ...props
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
      value={value}
      onChange={onChange}
      name={name}
      {...props}
    />
  </div>
);

export default StudentResume;
