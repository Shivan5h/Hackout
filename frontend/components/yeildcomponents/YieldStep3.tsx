import React from "react";

interface YieldStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const YieldStep3: React.FC<YieldStepProps> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 3: Soil Properties</h2>
      <input
        type="text"
        name="Soil_Organic_Matter"
        value={formData.Soil_Organic_Matter}
        onChange={handleChange}
        placeholder="Soil Organic Matter"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 border-gray-700"
      />
      <input
        type="text"
        name="Soil_pH"
        value={formData.Soil_pH}
        onChange={handleChange}
        placeholder="Soil pH"
        className="p-2 border rounded mb-4 w-full bg-gray-700 border-gray-700"
      />
      <input
        type="text"
        name="Soil_Texture"
        value={formData.Soil_Texture}
        onChange={handleChange}
        placeholder="Soil Texture"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 border-gray-700"
      />
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className="bg-gray-500 text-white p-2 rounded"
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

export default YieldStep3;
