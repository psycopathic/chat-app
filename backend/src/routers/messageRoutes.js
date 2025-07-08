import express from 'express'
import { protectRoute } from '../middlewares/authMiddleware.js';
import { getUserForSidebar } from '../controllers/messageControllers.js';

const router = express.Router();

router.get('/users', protectRoute,getUserForSidebar);

export default router;

