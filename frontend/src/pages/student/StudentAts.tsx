import StakeNavBar from "../../functions/StakeNavBar";
import { useState } from "react";
import { MenuItem2 } from "../../types";

type Metric = {
  name: string;
  score: number;
  maxScore: number;
};

type HistoryScore = {
  score: number;
  date: string;
};
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

  const metrics: Metric[] = [
    { name: "Keyword Matching", score: 5, maxScore: 10 },
    { name: "Resume Formatting", score: 7, maxScore: 10 },
    { name: "Section Organization", score: 8, maxScore: 10 },
    { name: "Job Title Relevance", score: 5, maxScore: 10 },
    { name: "Bullet Points", score: 8, maxScore: 10 },
    { name: "Skill Context", score: 8, maxScore: 10 },
  ];

  const historyScores: HistoryScore[] = [
    { score: 5.0, date: "2 weeks ago" },
    { score: 5.0, date: "10 days ago" },
    { score: 6.5, date: "1 week ago" },
    { score: 7.0, date: "5 days ago" },
    { score: 6.8, date: "3 days ago" },
    { score: 8.0, date: "2 days ago" },
    { score: 7.6, date: "Today" },
  ];

  const averageScore =
    historyScores.reduce((acc, curr) => acc + curr.score, 0) /
    historyScores.length;
  const formattedAverageScore = averageScore.toFixed(1);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return "bg-success-500";
    if (percentage >= 50) return "bg-warning-500";
    return "bg-danger-500";
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

          {/* Score Analysis */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Current Score */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl w-full md:w-1/3">
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
                      {formattedAverageScore}
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

              {/* Metrics */}
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Detailed Analysis
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">
                          {metric.name}
                        </span>
                        <span className="font-semibold">
                          {metric.score}/{metric.maxScore}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${getScoreColor(
                            metric.score,
                            metric.maxScore
                          )}`}
                          style={{
                            width: `${(metric.score / metric.maxScore) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 px-4 py-2 text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center">
                  View Detailed Analysis
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Score History */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Score History
            </h2>
            <div className="flex items-end h-40 gap-2 mt-6">
              {historyScores.map((history, index) => {
                const height = (history.score / 10) * 100;
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className={`w-full rounded-t-lg ${
                        history.score >= 7
                          ? "bg-success-500"
                          : history.score >= 5
                          ? "bg-warning-500"
                          : "bg-danger-500"
                      }`}
                      style={{ height: `${height}%` }}
                    >
                      <span className="flex items-center justify-center h-full text-white font-medium text-xs">
                        {history.score}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      {history.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAts;
