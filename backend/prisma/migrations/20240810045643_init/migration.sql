-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CropRotationForm" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "previousCrop" INTEGER NOT NULL,
    "cropFamilyCompatibility" INTEGER NOT NULL,
    "nutrientDemandCompatibility" DOUBLE PRECISION NOT NULL,
    "pestDiseaseCarryoverRisk" INTEGER NOT NULL,
    "soilNutrientDepletionIndex" DOUBLE PRECISION NOT NULL,
    "soilFertilityRestorationPotential" DOUBLE PRECISION NOT NULL,
    "climateSuitabilityOverlap" DOUBLE PRECISION NOT NULL,
    "moistureCompatibility" DOUBLE PRECISION NOT NULL,
    "rotationCycleDuration" INTEGER NOT NULL,
    "coverCropUse" INTEGER NOT NULL,
    "greenManureImpact" DOUBLE PRECISION NOT NULL,
    "previousYield" DOUBLE PRECISION NOT NULL,
    "previousCropHealthScore" DOUBLE PRECISION NOT NULL,
    "rotationSuccessRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CropRotationForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CropRotationForm" ADD CONSTRAINT "CropRotationForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
