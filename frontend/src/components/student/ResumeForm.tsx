import React from "react";
import { ResumeData } from "../../types";

type Props = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  onPreview: () => void;
  onDownload: () => void;
};

const ResumeForm: React.FC<Props> = ({
  data,
  setData,
  onPreview,
  onDownload,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === "skills" ? value.split(",") : value });
  };

  return (
    <div className="space-y-4 text-black">
      {["name", "email", "education"].map((field) => (
        <input
          key={field}
          name={field}
          value={(data as any)[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full border p-2 rounded text-black"
        />
      ))}
      <textarea
        name="experience"
        value={data.experience}
        onChange={handleChange}
        placeholder="Experience"
        className="w-full border p-2 rounded"
      />
      <input
        name="skills"
        value={data.skills.join(",")}
        onChange={handleChange}
        placeholder="Skills (comma separated)"
        className="w-full border p-2 rounded"
      />
      <div className="flex space-x-2">
        <button
          onClick={onPreview}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Preview
        </button>
        <button
          onClick={onDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
