import React from "react";

interface SoilStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const SoilStep3: React.FC<SoilStepProps> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 3: Environmental Factors</h2>
      <input
        type="text"
        name="Soil_Temperature"
        value={formData.Soil_Temperature}
        onChange={handleChange}
        placeholder="Soil Temperature"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 border-gray-700"
      />
      <input
        type="text"
        name="Soil_Moisture"
        value={formData.Soil_Moisture}
        onChange={handleChange}
        placeholder="Soil Moisture"
        className="p-2 border rounded mb-4 w-full bg-gray-700 border-gray-700"
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

export default SoilStep3;
