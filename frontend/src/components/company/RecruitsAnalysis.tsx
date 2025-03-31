import React from "react";

const RecruitsAnalysis: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Placement Analysis</h2>
      <div className="mb-2">
        <span className="text-red-500 mr-2">0%</span>
        <span>Overdue work</span>
      </div>
      <div className="mb-2">
        <span className="text-yellow-500 mr-2">19%</span>
        <span>Work finished late</span>
      </div>
    </div>
  );
};

export default RecruitsAnalysis;
