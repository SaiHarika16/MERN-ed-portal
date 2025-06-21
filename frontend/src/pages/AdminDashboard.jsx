function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <h3>Admin Dashboard</h3>
      <p>Here you can view all students and teachers.</p>
    </div>
  );
}

export default AdminDashboard;
