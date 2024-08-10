"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Step1 from "@/components/step1";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";
import Step4 from "@/components/step4";
import Step5 from "@/components/step5";

const MultiStepForm: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
  });

  interface FormData {
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
  }
  
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
    setStep(6); // Switch to the display step
  };

  const renderStep = () => {
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
        return <FormDataGrid data={submittedData} />;
      default:
        return null;
    }
  };

  return <div className="min-h-screen flex items-center justify-center">{renderStep()}</div>;
};

// Component to display form data in a grid
const FormDataGrid = ({ data }: { data: FormData }) => {
  if (!data) return <div>No data to display.</div>;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Crop Rotation Recommendation</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="p-4 border rounded">
            <strong>{key.replace(/_/g, ' ')}:</strong> <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiStepForm;
