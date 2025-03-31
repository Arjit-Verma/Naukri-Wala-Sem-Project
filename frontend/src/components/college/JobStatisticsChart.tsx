import { useState, useEffect } from "react";

type JobStatisticsData = {
  date: string;
  notPlaced: number;
  processing: number;
  interview: number;
  placed: number;
};

const JobStatisticsChart = () => {
  const [statsData, setStatsData] = useState<JobStatisticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobStatistics = async () => {
      try {
        // Simulating API call
        const response = await fetch(
          "http://localhost:3001/api/job-statistics"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: JobStatisticsData[] = await response.json();
        setStatsData(data);
      } catch (err) {
        // Proper error typing
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobStatistics();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!statsData.length) return <div className="p-4">No data available</div>;

  // Calculate maximum value for percentage scaling
  const maxValue = Math.max(
    ...statsData.flatMap((day) => [
      day.notPlaced || 0,
      day.processing || 0,
      day.interview || 0,
      day.placed || 0,
    ])
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Job statistics chart</h2>
      <div className="text-xs text-gray-500 mb-2">Week</div>

      <div className="flex justify-end mb-1 text-xs">
        <span className="text-red-500 font-semibold text-lg px-4">
          Not Placed
        </span>
        <span className="text-blue-500 font-semibold text-lg px-4">
          Processing
        </span>
        <span className="text-yellow-500 font-semibold text-lg px-4">
          Interview
        </span>
        <span className="text-green-500 font-semibold text-lg px-4">
          Placed
        </span>
      </div>

      <div className="space-y-3">
        {statsData.map((day, index) => (
          <div key={index} className="flex items-center py-6">
            <div className="w-24 text-xs text-gray-500">{day.date}</div>
            <div className="flex-1 flex space-x-1">
              <div
                className="h-3 bg-red-500 rounded"
                style={{ width: `${((day.notPlaced || 0) / maxValue) * 100}%` }}
              ></div>
              <div
                className="h-3 bg-blue-500 rounded"
                style={{
                  width: `${((day.processing || 0) / maxValue) * 100}%`,
                }}
              ></div>
              <div
                className="h-3 bg-yellow-500 rounded"
                style={{ width: `${((day.interview || 0) / maxValue) * 100}%` }}
              ></div>
              <div
                className="h-3 bg-green-500 rounded"
                style={{ width: `${((day.placed || 0) / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-2 text-xs pl-20 text-gray-500">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
          <span key={num}>{num}</span>
        ))}
      </div>
    </div>
  );
};

export default JobStatisticsChart;
