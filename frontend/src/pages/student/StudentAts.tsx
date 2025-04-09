import StakeNavBar from "../../functions/StakeNavBar";
import { useState } from "react";
import { MenuItem2 } from "../../types";
import axios from "axios";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/student/dashboard" },
  { id: 1, title: "Resume", link: "/student/resume" },
  { id: 2, title: "ATS Score", link: "/student/ats_score" },
  { id: 3, title: "Templates", link: "/student/coldmail" },
  { id: 4, title: "Company", link: "/student/companylist" },
];

const StudentAts = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [averageScore, setAverageScore] = useState<number>(0);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);

      const formData = new FormData();
      formData.append("resume", file);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/upload-resume",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const output = response.data.output;
        const atsScore = parseFloat(output.split("\n")[0]);
        setOutput(output);
        setAverageScore(atsScore / 10);
      } catch (error: any) {
        console.error("Error uploading file:", error);
        setOutput(
          error.response?.data?.error || "Failed to process the resume."
        );
      }
    }
  };

  const getOverallScoreColor = (score: number) => {
    if (score >= 7) return "text-success-500";
    if (score >= 5) return "text-warning-500";
    return "text-danger-500";
  };

  return (
    <div>
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
      <div className="min-h-screen bg-gray-100 py-12 px-4 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Resume ATS Score Analysis
            </h1>
            <p className="text-gray-600 mt-2">
              Optimize your resume for applicant tracking systems
            </p>
          </div>

          {/* Upload Section */}
          <div className="mb-10">
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                isDragging
                  ? "border-primary-500 bg-primary-50"
                  : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className={`w-12 h-12 ${
                    isDragging ? "text-primary-500" : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Upload Your Resume
              </h3>
              <p className="text-gray-500 mb-4">
                {fileName ? fileName : "Drag and drop your resume here or"}
              </p>
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
              />
              <label
                htmlFor="resume-upload"
                className="inline-block px-6 py-2 bg-primary-500 text-white rounded-lg cursor-pointer hover:bg-primary-600 transition-colors"
              >
                Browse Files
              </label>
              <p className="text-sm text-gray-400 mt-3">
                Supports: PDF, DOCX, TXT (Max 5MB)
              </p>
            </div>
          </div>

          {/* Current Score */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your ATS Score
            </h2>
            <div className="relative w-40 h-40 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={
                    averageScore >= 7
                      ? "#10b981"
                      : averageScore >= 5
                      ? "#f59e0b"
                      : "#ef4444"
                  }
                  strokeWidth="8"
                  strokeDasharray={`${(averageScore / 10) * 283} 283`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={`text-4xl font-bold ${getOverallScoreColor(
                    averageScore
                  )}`}
                >
                  {averageScore.toFixed(1)}
                </span>
                <span className="text-gray-500">/10</span>
              </div>
            </div>
            <p className="text-gray-600">
              {averageScore >= 7
                ? "Excellent! Keep it up"
                : averageScore >= 5
                ? "Good, but could be improved"
                : "Needs significant improvement"}
            </p>
          </div>

          {/* Analysis Output */}
          {output && (
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Detailed Analysis Report
                </h2>
                <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium">
                  {averageScore >= 7
                    ? "Great Fit"
                    : averageScore >= 5
                    ? "Moderate Fit"
                    : "Needs Work"}
                </span>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="grid gap-4">
                  {output.split("\n").map((line, index) => {
                    const isCritical =
                      line.toLowerCase().includes("missing") ||
                      line.toLowerCase().includes("improve") ||
                      line.toLowerCase().includes("lack");
                    const isPositive =
                      line.toLowerCase().includes("good") ||
                      line.toLowerCase().includes("strong") ||
                      line.toLowerCase().includes("excellent");

                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-lg transition-all ${
                          isCritical
                            ? "bg-red-50 border border-red-200 hover:border-red-300"
                            : isPositive
                            ? "bg-green-50 border border-green-200 hover:border-green-300"
                            : "bg-white border border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 mt-1 ${
                              isCritical
                                ? "text-red-500"
                                : isPositive
                                ? "text-green-500"
                                : "text-primary-500"
                            }`}
                          >
                            {isCritical ? (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : isPositive ? (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                          <p
                            className={`text-sm leading-relaxed ${
                              isCritical
                                ? "text-red-700"
                                : isPositive
                                ? "text-green-700"
                                : "text-gray-700"
                            }`}
                          >
                            {line.replace(/•\s*/g, "")}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Key Takeaways
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {averageScore >= 7 ? (
                      <>
                        <li>Your resume is well-optimized for ATS systems</li>
                        <li>
                          Maintain regular updates as you gain new experiences
                        </li>
                      </>
                    ) : averageScore >= 5 ? (
                      <>
                        <li>Good foundation but needs some improvements</li>
                        <li>Focus on keyword optimization and formatting</li>
                      </>
                    ) : (
                      <>
                        <li>
                          Significant improvements needed for ATS compatibility
                        </li>
                        <li>Review missing keywords and section structure</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAts;
