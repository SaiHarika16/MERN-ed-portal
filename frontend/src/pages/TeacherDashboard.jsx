function TeacherDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <h3>Teacher Dashboard</h3>
      <p>Here you can assign tasks to students and view their progress.</p>
    </div>
  );
}

export default TeacherDashboard;
