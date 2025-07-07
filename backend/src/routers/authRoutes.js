import express from 'express'
import { signup, login, logout, updateProfile, checkAuth } from '../controllers/authControllers.js';
import { protectRoute } from '../middlewares/authMiddleware.js';

const route = express.Router();

route.post('/signup', signup);
route.post('/logout', logout);
route.post('/login', login);

route.put('/updateProfiles', protectRoute, updateProfile);
route.get('/check', protectRoute, checkAuth);

export default route