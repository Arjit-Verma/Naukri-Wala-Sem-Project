import { useState } from "react";
import TemplateSelector from "../../components/student/TemplateSelector";
import ResumeForm from "../../components/student/ResumeForm";
import ResumePreview from "../../components/student/ResumePreview";
import { ResumeData, Template } from "../../types";
// @ts-ignore
import html2pdf from "html2pdf.js";

const templates: Template[] = [
  { id: 1, name: "Simple", thumbnail: "/templates/template1.png" },
  { id: 2, name: "Modern", thumbnail: "/templates/template2.png" },
];

function StudentResume() {
  const [selectedTemplateId, setSelectedTemplateId] = useState<number>(1);
  const [data, setData] = useState<ResumeData>({
    name: "",
    email: "",
    experience: "",
    education: "",
    skills: [],
  });

  const handleDownload = () => {
    const element = document.getElementById("preview");
    if (element) {
      html2pdf().from(element).save("resume.pdf");
    }
  };

  return (
    <div className="grid grid-cols-2 min-h-screen p-4 gap-4 bg-gray-100 text-black">
      <div>
        <h2 className="text-xl font-bold mb-2">Choose a Resume Template</h2>
        <TemplateSelector
          templates={templates}
          selectedTemplateId={selectedTemplateId}
          onSelect={setSelectedTemplateId}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Edit Your Resume</h2>
        <ResumeForm
          data={data}
          setData={setData}
          onPreview={() => {}}
          onDownload={handleDownload}
        />
        <div id="preview" className="mt-6">
          <ResumePreview data={data} />
        </div>
      </div>
    </div>
  );
}

export default StudentResume;
