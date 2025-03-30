import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data = {
    labels: ["Placed", "Not Placed", "Interview", "Processing"],
    datasets: [
      {
        label: "Student Status",
        data: [40, 20, 30, 30],
        backgroundColor: ["#4CAF50", "#F44336", "#FF9800", "#2196F3"],
        borderColor: ["#4CAF50", "#F44336", "#FF9800", "#2196F3"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="max-w-xs mx-auto">
        <h2 className="text-lg font-semibold mb-2">Pie Chart Analysis</h2>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
