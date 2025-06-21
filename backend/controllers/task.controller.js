//task.controller.js
import Task from '../models/Task.js';
import User from '../models/User.js';

// Create a new task (Teacher only)
export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    // Check if current user is teacher
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ message: 'Only teachers can assign tasks' });
    }

    // Check if assignedTo user exists and is a student
    const student = await User.findById(assignedTo);
    if (!student || student.role !== 'student') {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const task = new Task({
      title,
      description,
      assignedBy: req.user._id,
      assignedTo,
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tasks assigned to a student (Student only or teacher viewing their assigned students)
export const getTasksForStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Students can only see their own tasks
    if (req.user.role === 'student' && req.user._id.toString() !== studentId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Teachers can only see tasks for their students - optional check if needed

    const tasks = await Task.find({ assignedTo: studentId }).populate('assignedBy', 'name email');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    console.log("Received status:", status);

    if (req.user.role !== 'student') {
      return res.status(403).json({ message: 'Only students can update task status' });
    }

    // Validate allowed status values
    const allowedStatuses = ['pending', 'progress', 'completed'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You can only update your own tasks' });
    }

    task.status = status;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tasks assigned BY the logged-in teacher
export const getTasksForTeacher = async (req, res) => {
  try {
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ message: 'Only teachers can view this data' });
    }

    const tasks = await Task.find({ assignedBy: req.user._id })
      .populate('assignedTo', 'name email');

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
