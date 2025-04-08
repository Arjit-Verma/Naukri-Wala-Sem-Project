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
    name: "Arjun Mehta",
    rollNumber: "22bcs015",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Priya Sharma",
    rollNumber: "22bcs016",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Rohan Patel",
    rollNumber: "22bcs017",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Sneha Iyer",
    rollNumber: "22bcs018",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Kunal Singh",
    rollNumber: "22bcs019",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Aditi Verma",
    rollNumber: "22bcs020",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Manav Desai",
    rollNumber: "22bcs021",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Isha Nair",
    rollNumber: "22bcs022",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Devansh Reddy",
    rollNumber: "22bcs023",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Neha Kapoor",
    rollNumber: "22bcs024",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Siddharth Jain",
    rollNumber: "22bcs025",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Tanvi Joshi",
    rollNumber: "22bcs026",
    status: "Processing",
    imageUrl: studentpic,
  },
  // Add more as needed
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
