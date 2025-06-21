import express from 'express';
import { getAllStudents, getAllTeachers } from '../controllers/admin.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/students', protect, getAllStudents);
router.get('/teachers', protect, getAllTeachers);

export default router;
