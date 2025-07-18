# EduSphere Platform

## Overview

EduSphere is a modern, full-stack web application designed to streamline educational management for institutions, teachers, and students. The platform offers robust user management, secure authentication, task assignment, and role-based dashboards, all built with the MERN stack and a visually appealing, responsive UI.

## Features
- Role-based authentication (Admin, Teacher, Student)
- Secure login and registration
- Task assignment and management
- Responsive, modern Material-UI design
- Clean, maintainable codebase

## Technology Stack
- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Project Structure

```
edusphere-platform/
├── backend/
│   ├── config/                # Database configuration
│   │   └── db.js
│   ├── controllers/           # Route controllers (business logic)
│   │   ├── admin.controller.js
│   │   ├── auth.controller.js
│   │   ├── task.controller.js
│   │   └── teacher.controller.js
│   ├── middleware/            # Express middleware (e.g., authentication)
│   │   └── auth.middleware.js
│   ├── models/                # Mongoose models
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/                # API route definitions
│   │   ├── admin.route.js
│   │   ├── auth.route.js
│   │   ├── task.route.js
│   │   └── teacher.route.js
│   ├── server.js              # Entry point for backend server
│   ├── package.json           # Backend dependencies and scripts
│   └── ...
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── pages/             # React page components
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── StudentDashboard.jsx
│   │   │   └── TeacherDashboard.jsx
│   │   ├── App.js             # Main React component
│   │   ├── index.js           # React entry point
│   │   └── ...
│   ├── package.json           # Frontend dependencies and scripts
│   └── ...
├── README.md                  # Project documentation
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB (local or cloud instance)

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/edusphere-platform.git
   cd edusphere-platform
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `backend/` directory with the following content:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000 # Optional: defaults to 5000 if not set
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB URI.
   - Replace `your_jwt_secret_key` with a strong, random secret for JWT signing.

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000` by default.

### Frontend Setup

1. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start the frontend React app:**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000` by default.

## Usage
- Access the application at `http://localhost:3000` in your browser.
- Register as a new user or log in with existing credentials.
- The platform will present features and dashboards based on your assigned role (Admin, Teacher, Student).

## Environment Variables Reference (Backend)
| Variable    | Description                        | Example Value                |
|-------------|------------------------------------|------------------------------|
| MONGO_URI   | MongoDB connection string          | mongodb://localhost:27017/db |
| JWT_SECRET  | Secret key for JWT signing         | mySuperSecretKey123!         |
| PORT        | (Optional) Backend server port     | 5000                         |

## License
This project is licensed under the MIT License. 