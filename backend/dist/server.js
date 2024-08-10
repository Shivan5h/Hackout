"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const saltRounds = 10;
const jwtSecret = 'your_jwt_secret_key'; // Replace with your secret key
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No Bearer token provided');
        return res.sendStatus(401); // Unauthorized
    }
    const token = authHeader.split(' ')[1];
    console.log('Token:', token);
    jsonwebtoken_1.default.verify(token, jwtSecret, (err, user) => {
        if (err) {
            console.log('Token verification error:', err.message);
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
};
app.get('/test-token', authenticateToken, (req, res) => {
    res.json({ message: 'Token is valid', user: req.user });
});
// Signup route to create a new user
app.post('/signup', async (req, res) => {
    const { email, password, fullName } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists.' });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
            },
        });
        res.status(201).json({ message: 'User created successfully', user });
    }
    catch (error) {
        res.status(400).json({ error: 'User could not be created.' });
    }
});
// Login route to authenticate a user and generate a JWT token
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, jwtSecret, {
            expiresIn: '24h',
        });
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        res.status(400).json({ error: 'Login failed.' });
    }
});
// Protected route to create a new CropRotationForm for a user
app.post('/rotation', authenticateToken, async (req, res) => {
    const { previousCrop, cropFamilyCompatibility, nutrientDemandCompatibility, pestDiseaseCarryoverRisk, soilNutrientDepletionIndex, soilFertilityRestorationPotential, climateSuitabilityOverlap, moistureCompatibility, rotationCycleDuration, coverCropUse, greenManureImpact, previousYield, previousCropHealthScore, rotationSuccessRate, } = req.body;
    try {
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
        // Fake crop rotation analysis
        let decisionBasedRecommendation = '';
        if (rotationSuccessRate > 70 && soilFertilityRestorationPotential > 5) {
            decisionBasedRecommendation = 'The crop rotation plan is promising. Consider adding more cover crops to enhance soil fertility.';
        }
        else {
            decisionBasedRecommendation = 'The crop rotation plan needs adjustment. Review soil nutrient levels and rotation cycle duration.';
        }
        // Fake API call
        const fakeApiResponse = await axios_1.default.post('https://fakeapi.com/rotation-analysis', {
            previousCrop,
            cropFamilyCompatibility,
            nutrientDemandCompatibility,
            pestDiseaseCarryoverRisk,
            soilNutrientDepletionIndex,
            soilFertilityRestorationPotential,
            climateSuitabilityOverlap,
            moistureCompatibility,
            rotationCycleDuration,
            coverCropUse,
            greenManureImpact,
            previousYield,
            previousCropHealthScore,
            rotationSuccessRate,
        });
        // Store the form in the database (assuming you still want to store it)
        const form = await prisma.cropRotationForm.create({
            data: {
                userId: req.user.userId,
                previousCrop,
                cropFamilyCompatibility,
                nutrientDemandCompatibility,
                pestDiseaseCarryoverRisk,
                soilNutrientDepletionIndex,
                soilFertilityRestorationPotential,
                climateSuitabilityOverlap,
                moistureCompatibility,
                rotationCycleDuration,
                coverCropUse,
                greenManureImpact,
                previousYield,
                previousCropHealthScore,
                rotationSuccessRate,
            },
        });
        res.status(201).json({
            form,
            recommendation: decisionBasedRecommendation,
        });
    }
    catch (error) {
        res.status(400).json({ error: 'Form could not be created.' });
    }
});
// Protected route to create a new YieldPredictionForm with fake logic
app.post('/yield', authenticateToken, async (req, res) => {
    const { cropType, soilNitrogen, soilPhosphorus, soilPotassium, soilOrganicMatter, soilPH, soilTexture, temperature, previousYield, predictionScore, } = req.body;
    try {
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
        let decisionBasedPrediction = '';
        if (predictionScore > 75 && soilNitrogen > 5) {
            decisionBasedPrediction = 'High yield expected. Ensure optimal irrigation and pest control.';
        }
        else {
            decisionBasedPrediction = 'Yield may be lower than expected. Review soil nutrients and environmental conditions.';
        }
        const fakeApiResponse = await axios_1.default.post('https://fakeapi.com/yield-prediction', {
            cropType,
            soilNitrogen,
            soilPhosphorus,
            soilPotassium,
            soilOrganicMatter,
            soilPH,
            soilTexture,
            temperature,
            previousYield,
            predictionScore,
        });
        // Store the yield prediction in the database (assuming you still want to store it)
        const yieldPrediction = await prisma.yieldPrediction.create({
            data: {
                userId: req.user.userId,
                cropType,
                soilNitrogen,
                soilPhosphorus,
                soilPotassium,
                soilOrganicMatter,
                soilPH,
                soilTexture,
                temperature,
                previousYield,
                predictionScore,
            },
        });
        res.status(201).json({
            yieldPrediction,
            prediction: decisionBasedPrediction,
        });
    }
    catch (error) {
        res.status(400).json({ error: 'Yield Prediction could not be created.' });
    }
});
app.post('/soil-health', authenticateToken, async (req, res) => {
    const { cropType, soilNitrogen, soilPhosphorus, soilPotassium, soilOrganicMatter, soilPH, soilTexture, temperature, previousYield, predictionScore, } = req.body;
    try {
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
        // Fake soil health analysis decision logic
        let decisionBasedRecommendation = '';
        if (soilOrganicMatter > 3 && soilPH >= 6.0) {
            decisionBasedRecommendation = 'Soil health appears good. Ensure regular monitoring and consider adding compost for optimal health.';
        }
        else {
            decisionBasedRecommendation = 'Soil health may need improvement. Review soil nutrient levels and adjust soil pH as necessary.';
        }
        // Fake API call
        const fakeApiResponse = await axios_1.default.post('https://fakeapi.com/soil-health-analysis', {
            cropType,
            soilNitrogen,
            soilPhosphorus,
            soilPotassium,
            soilOrganicMatter,
            soilPH,
            soilTexture,
            temperature,
            previousYield,
            predictionScore,
        });
        // Store the soil health form in the database
        const soilHealthForm = await prisma.soilHealthForm.create({
            data: {
                userId: req.user.userId,
                cropType,
                soilNitrogen,
                soilPhosphorus,
                soilPotassium,
                soilOrganicMatter,
                soilPH,
                soilTexture,
                temperature,
                previousYield,
                predictionScore,
            },
        });
        res.status(201).json({
            soilHealthForm,
            recommendation: decisionBasedRecommendation,
            fakeApiResponse: fakeApiResponse.data, // Include fake API response if needed
        });
    }
    catch (error) {
        res.status(400).json({ error: 'Soil Health Form could not be created.' });
    }
});
// Route to get the authenticated user's details
app.get('/me', authenticateToken, async (req, res) => {
    try {
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
        // Retrieve user information from the database
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            select: {
                id: true,
                email: true,
                fullName: true,
                // Add any other fields you want to expose
            },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user details.' });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
