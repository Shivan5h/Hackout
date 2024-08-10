import React from "react";

interface SoilStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const SoilStep1: React.FC<SoilStepProps> = ({
  formData,
  handleChange,
  handleNext,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 1: Soil Nutrients</h2>
      <input
        type="text"
        name="Soil_Nitrogen"
        value={formData.Soil_Nitrogen}
        onChange={handleChange}
        placeholder="Soil Nitrogen"
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

export default SoilStep1;
