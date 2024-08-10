import React from "react";

interface YieldStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const YieldStep1: React.FC<YieldStepProps> = ({
  formData,
  handleChange,
  handleNext,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 1: Crop Information</h2>
      <input
        type="text"
        name="Crop_Type"
        value={formData.Crop_Type}
        onChange={handleChange}
        placeholder="Crop Type"
        className="p-2 border rounded mb-4 w-full bg-gray-600 border-gray-800"
      />
      <button
        onClick={handleNext}
        className="bg-gray-500 text-white p-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default YieldStep1;
