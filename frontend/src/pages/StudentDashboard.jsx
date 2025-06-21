function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <h3>Student Dashboard</h3>
      <p>Here you can view your assigned tasks.</p>
    </div>
  );
}

export default StudentDashboard;
