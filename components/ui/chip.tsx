import React from "react";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => (
  <span className="inline-flex items-center justify-center px-2  mr-2 text-sm font-medium text-black bg-[#f5c518] rounded-full">
    {label}
  </span>
);

export default Chip;
