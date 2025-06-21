import express from 'express';
import {
  createTask,
  getTasksForStudent,
  updateTaskStatus,
} from '../controllers/task.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect, createTask);
router.get('/:studentId', protect, getTasksForStudent);
router.put('/:taskId', protect, updateTaskStatus);

export default router;
