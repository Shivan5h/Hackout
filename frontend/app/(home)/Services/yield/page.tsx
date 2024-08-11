"use client";
import React, { useState, ChangeEvent } from "react";
import YieldStep1 from "@/components/yeildcomponents/YeildStep1";
import YieldStep2 from "@/components/yeildcomponents/YieldStep2";
import YieldStep3 from "@/components/yeildcomponents/YieldStep3";
import YieldStep4 from "@/components/yeildcomponents/YieldStep4";
import YieldStep5 from "@/components/yeildcomponents/YiedStep5";

type YieldFormData = {
  Crop_Type: string;
  Soil_Nitrogen: string;
  Soil_Phosphorus: string;
  Soil_Potassium: string;
  Soil_Organic_Matter: string;
  Soil_pH: string;
  Soil_Texture: string;
  Temperature: string;
  Previous_Yield: string;
  Prediction_Score: string;
};

const YieldPredictionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<YieldFormData>({
    Crop_Type: "",
    Soil_Nitrogen: "",
    Soil_Phosphorus: "",
    Soil_Potassium: "",
    Soil_Organic_Matter: "",
    Soil_pH: "",
    Soil_Texture: "",
    Temperature: "",
    Previous_Yield: "",
    Prediction_Score: "",
  });

  const [submittedData, setSubmittedData] = useState<YieldFormData | null>(null);
  const [predictionResult, setPredictionResult] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Form data updated:", formData);
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => prevStep + 1);
      console.log("Moving to step:", step + 1);
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
    console.log("Moving back to step:", step - 1);
  };

  const validateStep = (currentStep: number): boolean => {
    let isValid = true;
    let fieldsToValidate: (keyof YieldFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ['Crop_Type'];
        break;
      case 2:
        fieldsToValidate = ['Soil_Nitrogen', 'Soil_Phosphorus', 'Soil_Potassium'];
        break;
      case 3:
        fieldsToValidate = ['Soil_Organic_Matter', 'Soil_pH', 'Soil_Texture'];
        break;
      case 4:
        fieldsToValidate = ['Temperature'];
        break;
      case 5:
        fieldsToValidate = ['Previous_Yield'];
        break;
    }

    for (const field of fieldsToValidate) {
      if (!formData[field]) {
        alert(`Please fill in the ${field.replace(/_/g, ' ')} field.`);
        isValid = false;
        break;
      }
    }

    console.log("Step validation result:", isValid);
    return isValid;
  };

  const calculatePrediction = (data: YieldFormData): number => {
    console.log("Calculating prediction with data:", data);

    const requiredFields = ['Soil_Nitrogen', 'Soil_Phosphorus', 'Soil_Potassium', 'Soil_pH', 'Temperature', 'Previous_Yield'];
    for (const field of requiredFields) {
      if (isNaN(parseFloat(data[field as keyof YieldFormData]))) {
        throw new Error(`Invalid value for ${field}: ${data[field as keyof YieldFormData]}`);
      }
    }

    const soilNitrogen = parseFloat(data.Soil_Nitrogen);
    const soilPhosphorus = parseFloat(data.Soil_Phosphorus);
    const soilPotassium = parseFloat(data.Soil_Potassium);
    const soilpH = parseFloat(data.Soil_pH);
    const temperature = parseFloat(data.Temperature);
    const previousYield = parseFloat(data.Previous_Yield);

    const prediction = (
      soilNitrogen * 0.2 +
      soilPhosphorus * 0.15 +
      soilPotassium * 0.15 +
      soilpH * 0.1 +
      temperature * 0.2 +
      previousYield * 0.2
    ) * 100;

    console.log("Calculated prediction:", prediction);
    return Math.round(prediction * 100) / 10000;
  };

  const handleSubmit = () => {
    console.log("Handling submit");
    if (!validateStep(5)) {
      console.log("Final step validation failed");
      return;
    }

    try {
      const prediction = calculatePrediction(formData);
      const updatedFormData = { ...formData, Prediction_Score: prediction.toString() };
      setSubmittedData(updatedFormData);
      setPredictionResult(`The predicted yield is ${prediction}%`);
      setStep(6);
      console.log("Prediction calculated and set:", prediction);
    } catch (error) {
      console.error('Prediction calculation failed:', error);
      setPredictionResult('Failed to calculate prediction. Please check your inputs and try again.');
    }
  };

  const renderStep = () => {
    console.log("Rendering step:", step);
    switch (step) {
      case 1:
        return (
          <YieldStep1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <YieldStep2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <YieldStep3
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <YieldStep4
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <YieldStep5
            formData={formData}
            handleChange={handleChange}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        );
      case 6:
        return (
          <>
            <YieldDataGrid data={submittedData} />
            {predictionResult && (
              <div className="mt-4 p-4 border rounded bg-gray-800">
                <h2 className="text-xl font-bold mb-2 text-white">Prediction Result</h2>
                <p className="text-white">{predictionResult}</p>
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return <div className="min-h-screen flex items-center justify-center">{renderStep()}</div>;
};

// Component to display form data in a grid
const YieldDataGrid: React.FC<{ data: YieldFormData | null }> = ({ data }) => {
  if (!data) return <div>No data to display.</div>;
  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white">
      <h2 className="text-2xl font-bold mb-4 text-white">Yield Prediction Data</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="p-2 border rounded">
            <strong>{key.replace(/_/g, ' ')}:</strong> <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YieldPredictionForm;
