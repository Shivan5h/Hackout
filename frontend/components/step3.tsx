"use client";
import React from "react";

interface Step3Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Climate and Moisture Compatibility
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-white mb-2">Climate Suitability Overlap</label>
          <input
            type="text"
            name="Climate_Suitability_Overlap"
            value={formData.Climate_Suitability_Overlap}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-700 border-gray-600 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Moisture Compatibility</label>
          <input
            type="text"
            name="Moisture_Compatibility"
            value={formData.Moisture_Compatibility}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-700  border-gray-600 rounded-lg"
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

export default Step3;
