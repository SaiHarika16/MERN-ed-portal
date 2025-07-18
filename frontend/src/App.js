import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Logo({ size = 32 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 12 }}>
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="logoGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#21cbf3" />
            <stop offset="100%" stopColor="#1976d2" />
          </radialGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1976d2" floodOpacity="0.3" />
          </filter>
        </defs>
        <ellipse cx="48" cy="48" rx="44" ry="36" fill="url(#logoGradient)" filter="url(#shadow)" />
        <text x="48" y="62" textAnchor="middle" fontSize="32" fill="#fff" fontFamily="Segoe UI, Arial" fontWeight="bold" letterSpacing="2">ES</text>
      </svg>
    </span>
  );
}

function LogoutAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const showLogout = ['/student', '/teacher', '/admin'].some((path) => location.pathname.startsWith(path));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!showLogout) return null;

  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Logo size={32} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
          EduSphere
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <Box>
      <LogoutAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
