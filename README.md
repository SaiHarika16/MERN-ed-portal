# edusphere-platform

## EduSphere: The Modern Education Platform

EduSphere is a full-stack web application designed for educational institutions, teachers, and students. It provides a robust platform for user management, task assignment, and role-based dashboards, built with the MERN stack and a modern, elegant UI.

### Features
- Role-based authentication (Admin, Teacher, Student)
- Secure login and registration
- Task assignment and management
- Responsive, modern Material-UI design
- Clean, maintainable codebase

### Tech Stack
- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express
- **Database:** MongoDB

### Getting Started

#### Prerequisites
- Node.js (v16+ recommended)
- MongoDB

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/edusphere-platform.git
   ```
2. Install dependencies for both backend and frontend:
   ```bash
   cd mern-ed/backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure environment variables as needed (see backend/config/db.js for DB connection).
4. Start the backend server:
   ```bash
   node server.js
   ```
5. Start the frontend React app:
   ```bash
   npm start
   ```

#### Usage
- Visit `http://localhost:3000` in your browser.
- Register as a new user or login with existing credentials.
- Use the platform according to your assigned role.

### License
This project is licensed under the MIT License. 
