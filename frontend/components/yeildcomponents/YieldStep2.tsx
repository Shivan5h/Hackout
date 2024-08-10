import React from "react";

interface YieldStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const YieldStep2: React.FC<YieldStepProps> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 2: Soil Nutrients</h2>
      <input
        type="text"
        name="Soil_Nitrogen"
        value={formData.Soil_Nitrogen}
        onChange={handleChange}
        placeholder="Soil Nitrogen"
        className="p-2 border rounded mb-4 w-full bg-gray-700 text-white border-gray-600"
      />
      <input
        type="text"
        name="Soil_Phosphorus"
        value={formData.Soil_Phosphorus}
        onChange={handleChange}
        placeholder="Soil Phosphorus"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 text-white border-gray-600"
      />
      <input
        type="text"
        name="Soil_Potassium"
        value={formData.Soil_Potassium}
        onChange={handleChange}
        placeholder="Soil Potassium"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 text-white border-gray-600"
      />
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className=" p-2 rounded  bg-gray-700 text-white border-gray-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default YieldStep2;
