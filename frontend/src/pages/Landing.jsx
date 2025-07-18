import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Logo({ size = 96 }) {
  return (
    <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="logoGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#21cbf3" />
            <stop offset="100%" stopColor="#1976d2" />
          </radialGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#1976d2" floodOpacity="0.3" />
          </filter>
        </defs>
        <ellipse cx="48" cy="48" rx="44" ry="36" fill="url(#logoGradient)" filter="url(#shadow)" />
        <text x="48" y="62" textAnchor="middle" fontSize="40" fill="#fff" fontFamily="Segoe UI, Arial" fontWeight="bold" letterSpacing="2">ES</text>
      </svg>
    </div>
  );
}

function Landing() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
        overflow: 'hidden',
      }}
    >
      <Logo />
      <Typography variant="h1" fontWeight={900} color="primary.contrastText" gutterBottom sx={{ letterSpacing: 2, fontSize: { xs: 36, sm: 56 } }}>
        EduSphere
      </Typography>
      <Typography variant="h5" color="primary.contrastText" gutterBottom sx={{ opacity: 0.85 }}>
        The Modern Education Platform
      </Typography>
      <div style={{ marginTop: 40, display: 'flex', gap: 24 }}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          size="large"
          sx={{ minWidth: 140, fontSize: 20, boxShadow: 3 }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          color="primary"
          size="large"
          sx={{ minWidth: 140, fontSize: 20, boxShadow: 3 }}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Landing; 