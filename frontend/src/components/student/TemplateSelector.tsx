import React from "react";
import { Template } from "../../types";

type Props = {
  templates: Template[];
  selectedTemplateId: number;
  onSelect: (id: number) => void;
};

const TemplateSelector: React.FC<Props> = ({
  templates,
  selectedTemplateId,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <div key={template.id} className="border p-2">
          <img src={template.thumbnail} alt={template.name} className="h-40" />
          <button
            className={`mt-2 w-full py-1 rounded ${
              selectedTemplateId === template.id
                ? "bg-blue-600 text-white"
                : "bg-blue-200"
            }`}
            onClick={() => onSelect(template.id)}
          >
            {selectedTemplateId === template.id ? "Selected" : "Select"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector;
