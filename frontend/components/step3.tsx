import React from 'react';

interface StepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Step3: React.FC<StepProps> = ({ formData, handleChange, handleNext, handlePrevious }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Step 3: Rotation Cycle Details</h2>
      
      {/* Existing Fields */}
      <label className="block mb-4">
        Climate Suitability Overlap:
        <input
          type="text"
          name="Climate_Suitability_Overlap"
          value={formData.Climate_Suitability_Overlap}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded  bg-gray-700 border-gray-500"
        />
      </label>
      <label className="block mb-4">
        Moisture Compatibility:
        <input
          type="text"
          name="Moisture_Compatibility"
          value={formData.Moisture_Compatibility}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded  bg-gray-700 border-gray-500"
        />
      </label>

      {/* New Field for Rotation Cycle Duration */}
      <label className="block mb-4">
        Rotation Cycle Duration:
        <input
          type="text"
          name="Rotation_Cycle_Duration"
          value={formData.Rotation_Cycle_Duration}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded bg-gray-700 border-gray-500"
        />
      </label>

      <div className="flex justify-between mt-6">
        <button onClick={handlePrevious} className="bg-gray-600 px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={handleNext} className="bg-blue-600 px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
