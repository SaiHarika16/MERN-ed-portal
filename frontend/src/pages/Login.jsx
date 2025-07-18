import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Alert } from '@mui/material';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('user', JSON.stringify(res.data));
      const role = res.data.role;
      navigate(`/${role}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
      }}
    >
      <Paper elevation={8} sx={{ p: 6, borderRadius: 4, minWidth: 350 }}>
        <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
          name="password"
            label="Password"
          type="password"
            fullWidth
            margin="normal"
          onChange={handleChange}
          required
        />
          <Button type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ mt: 2 }}>
            Login
          </Button>
      </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
