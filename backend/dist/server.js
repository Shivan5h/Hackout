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
app.post('/forms', authenticateToken, async (req, res) => {
    const { previousCrop, cropFamilyCompatibility, nutrientDemandCompatibility, pestDiseaseCarryoverRisk, soilNutrientDepletionIndex, soilFertilityRestorationPotential, climateSuitabilityOverlap, moistureCompatibility, rotationCycleDuration, coverCropUse, greenManureImpact, previousYield, previousCropHealthScore, rotationSuccessRate, } = req.body;
    try {
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
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
        res.status(201).json(form);
    }
    catch (error) {
        res.status(400).json({ error: 'Form could not be created.' });
    }
});
// Protected route to get all CropRotationForms for a user
app.get('/forms', authenticateToken, async (req, res) => {
    try {
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
        const forms = await prisma.cropRotationForm.findMany({
            where: { userId: req.user.userId },
        });
        res.json(forms);
    }
    catch (error) {
        res.status(400).json({ error: 'Could not retrieve forms.' });
    }
});
const PORT = process.env.PORT || 3001;
app.get('/me', authenticateToken, async (req, res) => {
    try {
        console.log("hello");
        if (!req.user || !req.user.userId) {
            return res.status(403).json({ error: 'User not authenticated.' });
        }
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            select: { id: true, email: true, fullName: true } // Exclude password
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
