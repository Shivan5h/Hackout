"use client";
import React from "react";

interface Step5Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
}

const Step5: React.FC<Step5Props> = ({
  formData,
  handleChange,
  handlePrevious,
  handleSubmit,
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Review & Submit</h2>
      
      <div className="text-white mb-4">
        <h3 className="text-xl font-semibold mb-2">Crop Information:</h3>
        <label className="block mb-2">
          Previous Crop:
          <input
            type="text"
            name="Previous_Crop"
            value={formData.Previous_Crop}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Crop Family Compatibility:
          <input
            type="text"
            name="Crop_Family_Compatibility"
            value={formData.Crop_Family_Compatibility}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Nutrient Demand Compatibility:
          <input
            type="text"
            name="Nutrient_Demand_Compatibility"
            value={formData.Nutrient_Demand_Compatibility}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
      </div>

      <div className="text-white mb-4">
        <h3 className="text-xl font-semibold mb-2">Risk and Soil Information:</h3>
        <label className="block mb-2">
          Pest/Disease Carryover Risk:
          <input
            type="text"
            name="Pest_Disease_Carryover_Risk"
            value={formData.Pest_Disease_Carryover_Risk}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Soil Nutrient Depletion Index:
          <input
            type="text"
            name="Soil_Nutrient_Depletion_Index"
            value={formData.Soil_Nutrient_Depletion_Index}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Soil Fertility Restoration Potential:
          <input
            type="text"
            name="Soil_Fertility_Restoration_Potential"
            value={formData.Soil_Fertility_Restoration_Potential}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
      </div>

      <div className="text-white mb-4">
        <h3 className="text-xl font-semibold mb-2">Climate and Moisture Compatibility:</h3>
        <label className="block mb-2">
          Climate Suitability Overlap:
          <input
            type="text"
            name="Climate_Suitability_Overlap"
            value={formData.Climate_Suitability_Overlap}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Moisture Compatibility:
          <input
            type="text"
            name="Moisture_Compatibility"
            value={formData.Moisture_Compatibility}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
      </div>

      <div className="text-white mb-4">
        <h3 className="text-xl font-semibold mb-2">Rotation and Cover Crop Details:</h3>
        <label className="block mb-2">
          Rotation Cycle Duration:
          <input
            type="text"
            name="Rotation_Cycle_Duration"
            value={formData.Rotation_Cycle_Duration}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Cover Crop Use:
          <input
            type="text"
            name="Cover_Crop_Use"
            value={formData.Cover_Crop_Use}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Green Manure Impact:
          <input
            type="text"
            name="Green_Manure_Impact"
            value={formData.Green_Manure_Impact}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
      </div>

      <div className="text-white mb-4">
        <h3 className="text-xl font-semibold mb-2">Previous Performance:</h3>
        <label className="block mb-2">
          Previous Yield:
          <input
            type="text"
            name="Previous_Yield"
            value={formData.Previous_Yield}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Previous Crop Health Score:
          <input
            type="text"
            name="Previous_Crop_Health_Score"
            value={formData.Previous_Crop_Health_Score}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
        <label className="block mb-2">
          Rotation Success Rate:
          <input
            type="text"
            name="Rotation_Success_Rate"
            value={formData.Rotation_Success_Rate}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
          />
        </label>
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
          onClick={handleSubmit}
          className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5;
