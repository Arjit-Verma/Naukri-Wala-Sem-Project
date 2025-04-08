const PlacementAnalysis: React.FC = () => {
  const metrics = [
    {
      label: "Placement Rate",
      value: "87%",
      trend: "up",
      change: "2.5%",
      color: "text-green-500",
    },
    {
      label: "Avg Package",
      value: "₹8.5L",
      trend: "up",
      change: "12%",
      color: "text-green-500",
    },
    {
      label: "Top Recruiters",
      value: "24",
      trend: "steady",
      color: "text-blue-500",
    },
    {
      label: "Pending Apps",
      value: "5%",
      trend: "down",
      change: "3%",
      color: "text-red-500",
    },
    {
      label: "Intern Conversion",
      value: "68%",
      trend: "up",
      change: "7%",
      color: "text-green-500",
    },
    {
      label: "Core Placements",
      value: "42%",
      trend: "down",
      change: "5%",
      color: "text-yellow-500",
    },
  ];

  const trendingCompanies = [
    "Microsoft",
    "Amazon",
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-100 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 sticky top-0 bg-white pb-2">
        Placement Analytics
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
            </div>
          </div>
        ))}
      </div>

      {/* Trending Companies */}
      <div className="mb-3">
        <h3 className="text-sm font-medium text-gray-700 mb-1">
          Top Recruiters
        </h3>
        <div className="flex flex-wrap gap-1">
          {trendingCompanies.map((company, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2 text-sm">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Preparedness</span>
            <span className="font-medium">78%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-green-500 h-1.5 rounded-full"
              style={{ width: "78%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Resume Score</span>
            <span className="font-medium">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-yellow-500 h-1.5 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Interview Rate</span>
            <span className="font-medium">42%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-red-500 h-1.5 rounded-full"
              style={{ width: "42%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementAnalysis;
