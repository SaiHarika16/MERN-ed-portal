import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, TextField, Button, Select, MenuItem, Alert, List, ListItem, ListItemText, FormControl, InputLabel } from '@mui/material';

function TeacherDashboard() {
  const [students, setStudents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    assignedTo: '',
  });
  const [message, setMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/teacher/students', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(res.data);
      } catch (err) {
        setMessage('Failed to fetch students');
      }
    };
    fetchStudents();
  }, [token]);

  useEffect(() => {
    const fetchAssignedTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks/assigned', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(res.data);
      } catch (err) {
        setMessage('Failed to fetch tasks');
      }
    };
    fetchAssignedTasks();
  }, [token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Task assigned successfully');
      setForm({ title: '', description: '', assignedTo: '' });
      const res = await axios.get('http://localhost:5000/api/tasks/assigned', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error assigning task');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)', p: 4 }}>
      <Paper elevation={8} sx={{ maxWidth: 700, mx: 'auto', p: 4, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
          Teacher Dashboard
        </Typography>
        {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
        <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
          <TextField
          name="title"
            label="Task Title"
          value={form.title}
          onChange={handleChange}
          required
            fullWidth
            margin="normal"
        />
          <TextField
          name="description"
            label="Description"
          value={form.description}
          onChange={handleChange}
          required
            fullWidth
            margin="normal"
        />
          <FormControl fullWidth margin="normal">
            <InputLabel id="student-label">Assign To</InputLabel>
            <Select
              labelId="student-label"
              name="assignedTo"
              value={form.assignedTo}
              label="Assign To"
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Student</MenuItem>
          {students.map((s) => (
                <MenuItem key={s._id} value={s._id}>
              {s.name} ({s.email})
                </MenuItem>
          ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Assign Task
          </Button>
      </form>
        <Typography variant="h5" fontWeight={600} color="primary" gutterBottom>
          Assigned Tasks
        </Typography>
        <List>
          {tasks.length === 0 && <ListItem>No tasks assigned yet.</ListItem>}
        {tasks.map((task) => (
            <ListItem key={task._id} alignItems="flex-start" sx={{ mb: 2, borderBottom: '1px solid #eee' }}>
              <ListItemText
                primary={<Typography fontWeight={600}>{task.title}</Typography>}
                secondary={<>
                  {task.description}
            <br />
                  <Typography variant="body2" color="text.secondary">
            Assigned to: {task.assignedTo.name} ({task.assignedTo.email})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
            Status: {task.status}
                  </Typography>
                </>}
              />
            </ListItem>
        ))}
        </List>
      </Paper>
    </Box>
  );
}

export default TeacherDashboard;
