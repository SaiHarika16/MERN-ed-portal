import { useEffect, useState } from 'react';
import axios from 'axios';

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
        console.error(err);
        setMessage('Failed to fetch users');
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {message && <p>{message}</p>}

      <h3>Teachers</h3>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {teacher.name} — {teacher.email}
          </li>
        ))}
      </ul>

      <h3>Students</h3>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} — {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
