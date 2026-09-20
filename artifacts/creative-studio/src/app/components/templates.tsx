import React from "react";

interface TemplatesProps {
  onSelectTemplate: (template: any) => void;
}

const Templates: React.FC<TemplatesProps> = ({ onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <p className="col-span-3 text-sm text-gray-500">Your saved templates will appear here.</p>
    </div>
  );
};

export default Templates;