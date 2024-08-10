-- CreateTable
CREATE TABLE "SoilHealthForm" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cropType" TEXT NOT NULL,
    "soilNitrogen" DOUBLE PRECISION NOT NULL,
    "soilPhosphorus" DOUBLE PRECISION NOT NULL,
    "soilPotassium" DOUBLE PRECISION NOT NULL,
    "soilOrganicMatter" DOUBLE PRECISION NOT NULL,
    "soilPH" DOUBLE PRECISION NOT NULL,
    "soilTexture" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "previousYield" DOUBLE PRECISION NOT NULL,
    "predictionScore" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SoilHealthForm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SoilHealthForm" ADD CONSTRAINT "SoilHealthForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
