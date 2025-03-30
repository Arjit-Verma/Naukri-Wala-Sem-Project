import React from "react";
import { ResumeData } from "../../types";

type Props = {
  data: ResumeData;
};

const ResumePreview: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-4 border shadow bg-white text-black">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-600">{data.email}</p>
      <hr className="my-2" />
      <h2 className="font-semibold">Experience</h2>
      <p>{data.experience}</p>
      <h2 className="font-semibold mt-2">Education</h2>
      <p>{data.education}</p>
      <h2 className="font-semibold mt-2">Skills</h2>
      <ul className="list-disc ml-4">
        {data.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumePreview;
