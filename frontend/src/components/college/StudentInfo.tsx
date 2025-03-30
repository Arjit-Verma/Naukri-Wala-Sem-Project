import React from "react";

import studentpic from "../../assets/cstudent.png";
interface Student {
  name: string;
  rollNumber: string;
  status: "Interview" | "Not Placed" | "Placed" | "Processing";
  imageUrl: string;
}

const students: Student[] = [
  {
    name: "Alice Johnson",
    rollNumber: "22bcs015",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Bob Smith",
    rollNumber: "22bcs016",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Carol White",
    rollNumber: "22bcs017",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "David Brown",
    rollNumber: "22bcs018",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Eva Green",
    rollNumber: "22bcs019",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Frank Miller",
    rollNumber: "22bcs020",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Grace Lee",
    rollNumber: "22bcs021",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Henry Clark",
    rollNumber: "22bcs022",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Ivy Davis",
    rollNumber: "22bcs023",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Jack Turner",
    rollNumber: "22bcs024",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Karen Wilson",
    rollNumber: "22bcs025",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Leo Wood",
    rollNumber: "22bcs026",
    status: "Processing",
    imageUrl: studentpic,
  },
  // Add more students as needed
];

const StudentInfo: React.FC = () => {
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
                  <p className="text-gray-500 text-sm">{student.rollNumber}</p>
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

export default StudentInfo;
