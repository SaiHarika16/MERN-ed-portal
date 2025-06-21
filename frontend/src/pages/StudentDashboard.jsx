import { useEffect, useState } from 'react';
import axios from 'axios';

function StudentDashboard() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;
  const studentId = user?._id;

  // Fetch tasks for the logged-in student
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tasks/${studentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(res.data);
      } catch (err) {
        console.error('Error fetching tasks:', err.response?.data || err.message);
      }
    };

    fetchTasks();
  }, [studentId, token]);

  // Handle status update
  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update local state
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );
      setMessage('Task status updated!');
    } catch (err) {
      console.error('Error updating status:', err.response?.data || err.message);
      setMessage('Error updating status');
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      {message && <p>{message}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ marginBottom: '1rem' }}>
            <strong>{task.title}</strong> — {task.description}
            <br />
            <span>Status: </span>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;