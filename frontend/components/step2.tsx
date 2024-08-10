"use client";
import React from "react";

interface Step2Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Risk and Soil Information
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-white mb-2">Pest/Disease Carryover Risk</label>
          <input
            type="text"
            name="Pest_Disease_Carryover_Risk"
            value={formData.Pest_Disease_Carryover_Risk}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-700 border-gray-600 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Soil Nutrient Depletion Index</label>
          <input
            type="text"
            name="Soil_Nutrient_Depletion_Index"
            value={formData.Soil_Nutrient_Depletion_Index}
            onChange={handleChange}
            className="w-full p-2 border  bg-gray-700 border-gray-600 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">
            Soil Fertility Restoration Potential
          </label>
          <input
            type="text"
            name="Soil_Fertility_Restoration_Potential"
            value={formData.Soil_Fertility_Restoration_Potential}
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
            className="py-2 px-4  bg-gray-700 text-white rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
