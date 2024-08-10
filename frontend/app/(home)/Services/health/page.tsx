"use client";
import React, { useState, ChangeEvent } from "react";
import Step1 from "@/components/step1";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";
import Step4 from "@/components/step4";
import Step5 from "@/components/step5";

type CropRotationFormData = {
  Previous_Crop: string;
  Crop_Family_Compatibility: string;
  Nutrient_Demand_Compatibility: string;
  Pest_Disease_Carryover_Risk: string;
  Soil_Nutrient_Depletion_Index: string;
  Soil_Fertility_Restoration_Potential: string;
  Climate_Suitability_Overlap: string;
  Moisture_Compatibility: string;
  Rotation_Cycle_Duration: string;
  Cover_Crop_Use: string;
  Green_Manure_Impact: string;
  Previous_Yield: string;
  Previous_Crop_Health_Score: string;
  Rotation_Success_Rate: string;
  Recommendation_Score: string;
};

const CropRotationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CropRotationFormData>({
    Previous_Crop: "",
    Crop_Family_Compatibility: "",
    Nutrient_Demand_Compatibility: "",
    Pest_Disease_Carryover_Risk: "",
    Soil_Nutrient_Depletion_Index: "",
    Soil_Fertility_Restoration_Potential: "",
    Climate_Suitability_Overlap: "",
    Moisture_Compatibility: "",
    Rotation_Cycle_Duration: "",
    Cover_Crop_Use: "",
    Green_Manure_Impact: "",
    Previous_Yield: "",
    Previous_Crop_Health_Score: "",
    Rotation_Success_Rate: "",
    Recommendation_Score: "",
  });

  const [submittedData, setSubmittedData] = useState<CropRotationFormData | null>(null);
  const [recommendationResult, setRecommendationResult] = useState<string | null>(null);

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
    let fieldsToValidate: (keyof CropRotationFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ['Previous_Crop', 'Crop_Family_Compatibility', 'Nutrient_Demand_Compatibility'];
        break;
      case 2:
        fieldsToValidate = ['Pest_Disease_Carryover_Risk', 'Soil_Nutrient_Depletion_Index', 'Soil_Fertility_Restoration_Potential'];
        break;
      case 3:
        fieldsToValidate = ['Climate_Suitability_Overlap', 'Moisture_Compatibility', 'Rotation_Cycle_Duration'];
        break;
      case 4:
        fieldsToValidate = ['Cover_Crop_Use', 'Green_Manure_Impact', 'Previous_Yield'];
        break;
      case 5:
        fieldsToValidate = ['Previous_Crop_Health_Score', 'Rotation_Success_Rate'];
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

  const calculateRecommendationScore = (data: CropRotationFormData): number => {
    console.log("Calculating recommendation score with data:", data);

    const requiredFields: (keyof CropRotationFormData)[] = [
      'Crop_Family_Compatibility', 'Nutrient_Demand_Compatibility', 'Pest_Disease_Carryover_Risk',
      'Soil_Nutrient_Depletion_Index', 'Soil_Fertility_Restoration_Potential', 'Climate_Suitability_Overlap',
      'Moisture_Compatibility', 'Rotation_Cycle_Duration', 'Cover_Crop_Use', 'Green_Manure_Impact',
      'Previous_Yield', 'Previous_Crop_Health_Score', 'Rotation_Success_Rate'
    ];

    for (const field of requiredFields) {
      if (isNaN(parseFloat(data[field]))) {
        throw new Error(`Invalid value for ${field}: ${data[field]}`);
      }
    }

    const weights = {
      Crop_Family_Compatibility: 0.1,
      Nutrient_Demand_Compatibility: 0.1,
      Pest_Disease_Carryover_Risk: 0.1,
      Soil_Nutrient_Depletion_Index: 0.1,
      Soil_Fertility_Restoration_Potential: 0.1,
      Climate_Suitability_Overlap: 0.1,
      Moisture_Compatibility: 0.1,
      Rotation_Cycle_Duration: 0.05,
      Cover_Crop_Use: 0.05,
      Green_Manure_Impact: 0.05,
      Previous_Yield: 0.05,
      Previous_Crop_Health_Score: 0.05,
      Rotation_Success_Rate: 0.05
    };

    let score = 0;
    for (const [field, weight] of Object.entries(weights)) {
      score += parseFloat(data[field as keyof CropRotationFormData]) * weight;
    }

    console.log("Calculated recommendation score:", score);
    return Math.round(score * 100) / 100;
  };

  const handleSubmit = () => {
    console.log("Handling submit");
    if (!validateStep(5)) {
      console.log("Final step validation failed");
      return;
    }

    try {
      const recommendationScore = calculateRecommendationScore(formData);
      const updatedFormData = { ...formData, Recommendation_Score: recommendationScore.toString() };
      setSubmittedData(updatedFormData);
      setRecommendationResult(`The calculated crop rotation recommendation score is ${recommendationScore}`);
      setStep(6);
      console.log("Recommendation score calculated and set:", recommendationScore);
    } catch (error) {
      console.error('Recommendation score calculation failed:', error);
      setRecommendationResult('Failed to calculate recommendation score. Please check your inputs and try again.');
    }
  };

  const renderStep = () => {
    console.log("Rendering step:", step);
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            handleChange={handleChange}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        );
      case 6:
        return (
          <>
            <FormDataGrid data={submittedData} />
            {recommendationResult && (
              <div className="mt-4 p-4 border rounded bg-gray-800">
                <h2 className="text-xl font-bold mb-2 text-white">Recommendation Result</h2>
                <p className="text-white">{recommendationResult}</p>
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
const FormDataGrid: React.FC<{ data: CropRotationFormData | null }> = ({ data }) => {
  if (!data) return <div>No data to display.</div>;
  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white">
      <h2 className="text-2xl font-bold mb-4 text-white">Crop Rotation Recommendation Data</h2>
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

export default CropRotationForm;