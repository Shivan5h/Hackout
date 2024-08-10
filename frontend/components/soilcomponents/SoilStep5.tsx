import React from "react";

interface SoilStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
}

const SoilStep5: React.FC<SoilStepProps> = ({
  formData,
  handleChange,
  handlePrevious,
  handleSubmit,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 5: Health Score</h2>
      <input
        type="text"
        name="Health_Score"
        value={formData.Health_Score}
        onChange={handleChange}
        placeholder="Health Score"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 text-white border-gray-700"
      />
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className="bg-gray-700 text-white p-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SoilStep5;
