"use client";
import React from "react";

interface Step4Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Step4: React.FC<Step4Props> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Rotation and Cover Crop Details
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-white mb-2">Rotation Cycle Duration</label>
          <input
            type="text"
            name="Rotation_Cycle_Duration"
            value={formData.Rotation_Cycle_Duration}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-700 border-gray-600 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Cover Crop Use</label>
          <input
            type="text"
            name="Cover_Crop_Use"
            value={formData.Cover_Crop_Use}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-700 border-gray-600 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Green Manure Impact</label>
          <input
            type="text"
            name="Green_Manure_Impact"
            value={formData.Green_Manure_Impact}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-700 border-gray-600 rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrevious}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
