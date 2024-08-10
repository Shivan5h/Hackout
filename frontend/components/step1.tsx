"use client";
import React from "react";

const Step1: React.FC<{ formData: any; handleChange: any; handleNext: any }> = ({
  formData,
  handleChange,
  handleNext,
}) => {
  return (
    <div className="w-full max-w-md p-8 bg-gray-900 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Step 1: Crop Information</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="Previous_Crop" className="block text-white">Previous Crop</label>
          <input
            type="text"
            id="Previous_Crop"
            name="Previous_Crop"
            value={formData.Previous_Crop}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-700 border-gray-700 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Crop_Family_Compatibility" className="block text-white">Crop Family Compatibility</label>
          <input
            type="text"
            id="Crop_Family_Compatibility"
            name="Crop_Family_Compatibility"
            value={formData.Crop_Family_Compatibility}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-700 border-gray-700 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Nutrient_Demand_Compatibility" className="block text-white">Nutrient Demand Compatibility</label>
          <input
            type="text"
            id="Nutrient_Demand_Compatibility"
            name="Nutrient_Demand_Compatibility"
            value={formData.Nutrient_Demand_Compatibility}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-700 border-gray-700 rounded-lg"
          />
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
