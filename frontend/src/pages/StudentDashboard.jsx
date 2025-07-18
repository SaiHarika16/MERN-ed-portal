import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, Select, MenuItem, Alert, List, ListItem, ListItemText, FormControl, InputLabel } from '@mui/material';

function StudentDashboard() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;
  const studentId = user?._id;

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
        setMessage('Error fetching tasks');
      }
    };
    fetchTasks();
  }, [studentId, token]);

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
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? { ...task, status: newStatus } : task))
      );
      setMessage('Task status updated!');
    } catch (err) {
      setMessage('Error updating status');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)', p: 4 }}>
      <Paper elevation={8} sx={{ maxWidth: 600, mx: 'auto', p: 4, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
          Student Dashboard
        </Typography>
        {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
        <List>
        {tasks.map((task) => (
            <ListItem key={task._id} alignItems="flex-start" sx={{ mb: 2, borderBottom: '1px solid #eee' }}>
              <ListItemText
                primary={<Typography fontWeight={600}>{task.title}</Typography>}
                secondary={task.description}
              />
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel>Status</InputLabel>
                <Select
              value={task.status}
                  label="Status"
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
            >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="progress">In Progress</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
        ))}
        </List>
      </Paper>
    </Box>
  );
}

export default StudentDashboard;
