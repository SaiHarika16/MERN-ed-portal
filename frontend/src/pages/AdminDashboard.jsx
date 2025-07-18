import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, List, ListItem, ListItemText, Alert } from '@mui/material';

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [message, setMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const studentRes = await axios.get('http://localhost:5000/api/admin/students', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(studentRes.data);

        const teacherRes = await axios.get('http://localhost:5000/api/admin/teachers', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTeachers(teacherRes.data);
      } catch (err) {
        setMessage('Failed to fetch users');
      }
    };
    fetchUsers();
  }, [token]);

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)', p: 4 }}>
      <Paper elevation={8} sx={{ maxWidth: 700, mx: 'auto', p: 4, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
          Admin Dashboard
        </Typography>
        {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
        <Typography variant="h5" fontWeight={600} color="primary" gutterBottom>
          Teachers
        </Typography>
        <List>
        {teachers.map((teacher) => (
            <ListItem key={teacher._id}>
              <ListItemText
                primary={<Typography fontWeight={600}>{teacher.name}</Typography>}
                secondary={teacher.email}
              />
            </ListItem>
        ))}
        </List>
        <Typography variant="h5" fontWeight={600} color="primary" gutterBottom sx={{ mt: 4 }}>
          Students
        </Typography>
        <List>
        {students.map((student) => (
            <ListItem key={student._id}>
              <ListItemText
                primary={<Typography fontWeight={600}>{student.name}</Typography>}
                secondary={student.email}
              />
            </ListItem>
        ))}
        </List>
      </Paper>
    </Box>
  );
}

export default AdminDashboard;
