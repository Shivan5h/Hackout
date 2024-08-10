import React from "react";

interface YieldStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handlePrevious: () => void;
}

const YieldStep5: React.FC<YieldStepProps> = ({
  formData,
  handleChange,
  handleSubmit,
  handlePrevious,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Step 5: Previous Yield</h2>
      <input
        type="text"
        name="Previous_Yield"
        value={formData.Previous_Yield}
        onChange={handleChange}
        placeholder="Previous Yield"
        className="p-2 border rounded mb-4 w-full  bg-gray-700 border-gray-700"
      />
      <input
        type="text"
        name="Prediction_Score"
        value={formData.Prediction_Score}
        onChange={handleChange}
        placeholder="Prediction Score"
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
          onClick={handleSubmit}
          className="bg-gray-700 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default YieldStep5;
