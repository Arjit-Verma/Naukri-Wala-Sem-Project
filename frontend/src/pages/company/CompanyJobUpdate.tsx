import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type College = {
  id: string;
  name: string;
  selected: boolean;
};

const CompanyJobUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [colleges, setColleges] = useState<College[]>([
    { id: "1", name: "ABC Engineering College", selected: false },
    { id: "2", name: "XYZ University", selected: false },
    { id: "3", name: "Tech Institute", selected: false },
    { id: "4", name: "Future Leaders Academy", selected: false },
    { id: "5", name: "Global Business School", selected: false },
  ]);
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    // Fetch job title based on id
    setJobTitle("Android Engineering Server"); // Mock data
  }, [id]);

  const toggleCollegeSelection = (collegeId: string) => {
    setColleges(
      colleges.map((college) =>
        college.id === collegeId
          ? { ...college, selected: !college.selected }
          : college
      )
    );
  };

  const handleSubmit = () => {
    const selectedColleges = colleges.filter((college) => college.selected);
    console.log("Job ID:", id);
    console.log("Selected Colleges:", selectedColleges);
    // Here you would submit the application to the selected colleges
    alert(
      `Application for ${jobTitle} submitted to ${selectedColleges.length} colleges`
    );
    navigate("/company/updatejob");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto h-screen overflow-auto">
      <h1 className="text-2xl font-bold mb-2">Apply Job to Colleges</h1>
      <h2 className="text-xl mb-6">Job: {jobTitle}</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Select Colleges</h3>
        <div className="border rounded-lg p-4 max-h-96 overflow-y-auto">
          {colleges.map((college) => (
            <div
              key={college.id}
              className={`p-3 border-b last:border-b-0 cursor-pointer ${
                college.selected ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleCollegeSelection(college.id)}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={college.selected}
                  onChange={() => toggleCollegeSelection(college.id)}
                  className="mr-3 h-4 w-4"
                  onClick={(e) => e.stopPropagation()}
                />
                <span>{college.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={() => navigate("/company/uploadjob")}
          className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={!colleges.some((c) => c.selected)}
          className={`px-4 py-2 bg-green-500 text-white rounded ${
            colleges.some((c) => c.selected)
              ? "hover:bg-green-600"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default CompanyJobUpdate;
