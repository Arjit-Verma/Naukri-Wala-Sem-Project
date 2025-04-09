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
    name: "Aarav Mehta",
    college: "IIIT Hyderabad",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Bhavya Sharma",
    college: "IIIT Dharwad",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Chirag Reddy",
    college: "IIIT Delhi",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Diya Nair",
    college: "IIIT Dharwad",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Eshan Joshi",
    college: "IIT Madras",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Fatima Khan",
    college: "IIIT Allahabad",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Gaurav Singh",
    college: "IIT Kanpur",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Harini Krishnan",
    college: "IIIT Dharwad",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Ishaan Verma",
    college: "IIIT Vadodara",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Jhanvi Desai",
    college: "IIT Delhi",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Karthik Iyer",
    college: "IIIT Bhubaneswar",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Lavanya Patil",
    college: "IIT Roorkee",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Manav Sinha",
    college: "IIIT Sri City",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Nidhi Chatterjee",
    college: "IIIT Dharwad",
    status: "Interview",
    imageUrl: studentpic,
  },
  {
    name: "Omkar Kulkarni",
    college: "IIT Guwahati",
    status: "Placed",
    imageUrl: studentpic,
  },
  {
    name: "Pooja Yadav",
    college: "IIIT Dharwad",
    status: "Not Placed",
    imageUrl: studentpic,
  },
  {
    name: "Rajat Bansal",
    college: "IIIT Lucknow",
    status: "Processing",
    imageUrl: studentpic,
  },
  {
    name: "Sneha Rane",
    college: "IIIT Dharwad",
    status: "Placed",
    imageUrl: studentpic,
  },
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
