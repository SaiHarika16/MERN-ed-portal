# EduSphere Platform

## Overview

EduSphere is a modern, full-stack web application designed for educational institutions, teachers, and students. It provides a robust platform for user management, task assignment, and role-based dashboards, built with the MERN stack and a sophisticated, responsive UI.

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

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-org/edusphere-platform.git
cd edusphere-platform
```

#### 2. Install Dependencies
Install dependencies for both backend and frontend:
```bash
cd backend
npm install
cd ../frontend
npm install
```

#### 3. Configure Environment Variables (Backend)
The backend requires a `.env` file for sensitive configuration. Create a `.env` file in the `backend/` directory with the following variables:

```ini
# .env (backend)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Optional: specify a custom port (default is 5000)
PORT=5000
```
- **MONGO_URI**: Your MongoDB connection string (e.g., from MongoDB Atlas or your local MongoDB instance).
- **JWT_SECRET**: A strong secret key for signing JWT tokens (choose a long, random string).
- **PORT**: (Optional) The port for the backend server. Defaults to 5000 if not specified.

> **Note:** Never commit your `.env` file or sensitive credentials to version control.

#### 4. Start the Backend Server
```bash
cd backend
npm start
```
The backend API will be available at `http://localhost:5000` (or your specified port).

#### 5. Start the Frontend Application
```bash
cd frontend
npm start
```
The frontend will be available at `http://localhost:3000` by default.

## Usage
- Open `http://localhost:3000` in your browser.
- Register as a new user or log in with existing credentials.
- Access features and dashboards according to your assigned role (Admin, Teacher, Student).

## Project Structure
```
edusphere-platform/
  backend/      # Express.js API, MongoDB models, routes, controllers
  frontend/     # React app, Material-UI components, pages
```

## License
This project is licensed under the MIT License. 