import React from "react";

import studentpic from "../../assets/cstudent.png";
interface Student {
  name: string;
  college: string;
  status: "Interview" | "Not Placed" | "Placed" | "Processing";
  imageUrl: string;
}

const students: Student[] = [
  {
    name: "Alice Johnson",
    college: "IIIT Dharawd",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Bob Smith",
    college: "IIIT Dharawd",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Carol White",
    college: "IIIT Dharawd",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "David Brown",
    college: "IIIT Dharawd",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Eva Green",
    college: "IIIT Dharawd",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Frank Miller",
    college: "IIIT Dharawd",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Grace Lee",
    college: "IIIT Dharawd",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Henry Clark",
    college: "IIIT Dharawd",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Ivy Davis",
    college: "IIIT Dharawd",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Jack Turner",
    college: "IIIT Dharawd",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Karen Wilson",
    college: "IIIT Dharawd",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Leo Wood",
    college: "IIIT Dharawd",
    status: "Processing",
    imageUrl: studentpic,
  },
  // Add more students as needed
];

const RecruitsInfo: React.FC = () => {
  return (
    <div className=" bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Student Info</h2>
        <div className="max-h-80 overflow-y-auto">
          {students.map((student, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={student.imageUrl}
                  alt={student.name}
                />
                <div>
                  <p className="text-gray-700">{student.name}</p>
                  <p className="text-gray-500 text-sm">{student.college}</p>
                </div>
              </div>
              <div
                className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusColor(
                  student.status
                )}`}
              >
                {student.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Placed":
      return "bg-green-500 text-white";
    case "Not Placed":
      return "bg-red-500 text-white";
    case "Interview":
      return "bg-yellow-500 text-white";
    case "Processing":
      return "bg-blue-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default RecruitsInfo;
