const RecruitsAnalysis: React.FC = () => {
  const metrics = [
    {
      label: "Candidates Selected",
      value: "124",
      trend: "up",
      change: "18%",
      color: "text-green-500",
    },
    {
      label: "Candidates Rejected",
      value: "76",
      trend: "down",
      change: "5%",
      color: "text-red-500",
    },
    {
      label: "Seats Remaining",
      value: "50",
      trend: "steady",
      color: "text-blue-500",
    },
    {
      label: "Avg CTC Offered",
      value: "₹12.5L",
      trend: "up",
      change: "8%",
      color: "text-green-500",
    },
    {
      label: "Interview Pass Rate",
      value: "62%",
      trend: "up",
      change: "4%",
      color: "text-green-500",
    },
    {
      label: "Diversity Hiring",
      value: "35%",
      trend: "up",
      change: "9%",
      color: "text-purple-500",
    },
  ];

  const topDepartments = [
    "Computer Science",
    "Electrical",
    "Mechanical",
    "Electronics",
    "Civil",
    "Chemical",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-100 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 sticky top-0 bg-white pb-2">
        Recruitment Dashboard
      </h2>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {metrics.map((metric, index) => (
          <div key={index} className="border rounded p-2 text-sm">
            <p className="text-gray-600 truncate">{metric.label}</p>
            <div className="flex items-center justify-between">
              <p className={`font-medium ${metric.color}`}>{metric.value}</p>
              {metric.trend === "up" && (
                <span className="text-green-500 text-xs">↑{metric.change}</span>
              )}
              {metric.trend === "down" && (
                <span className="text-red-500 text-xs">↓{metric.change}</span>
              )}
              {metric.trend === "steady" && (
                <span className="text-blue-500 text-xs">→</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Top Departments */}
      <div className="mb-3">
        <h3 className="text-sm font-medium text-gray-700 mb-1">
          Top Performing Departments
        </h3>
        <div className="flex flex-wrap gap-1">
          {topDepartments.map((dept, index) => (
            <span
              key={index}
              className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full text-xs"
            >
              {dept}
            </span>
          ))}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2 text-sm">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Hiring Target</span>
            <span className="font-medium">71%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-green-500 h-1.5 rounded-full"
              style={{ width: "71%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Offer Acceptance Rate</span>
            <span className="font-medium">89%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full"
              style={{ width: "89%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Campus ROI</span>
            <span className="font-medium">127%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-purple-500 h-1.5 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Additional Company-specific Info */}
      <div className="mt-3 text-xs text-gray-600">
        <p>
          Next Campus Drive: <span className="font-medium">May 15, 2023</span>
        </p>
        <p>
          Pending Offers: <span className="font-medium">12</span>
        </p>
        <p>
          Upcoming Interviews: <span className="font-medium">24</span>
        </p>
      </div>
    </div>
  );
};

export default RecruitsAnalysis;
