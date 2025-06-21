import express from 'express';
import { getAllStudents } from '../controllers/teacher.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/students', protect, getAllStudents); // Accessible only by teachers

export default router;
