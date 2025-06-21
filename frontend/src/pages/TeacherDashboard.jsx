import { useEffect, useState } from 'react';
import axios from 'axios';

function TeacherDashboard() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    assignedTo: '',
  });
  const [message, setMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  // Fetch list of students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/teacher/students', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(res.data);
      } catch (err) {
        setMessage('Failed to fetch students');
      }
    };

    fetchStudents();
  }, [token]);

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit task
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Task assigned successfully');
      setForm({ title: '', description: '', assignedTo: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error assigning task');
    }
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Task Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <select name="assignedTo" value={form.assignedTo} onChange={handleChange} required>
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name} ({s.email})
            </option>
          ))}
        </select>
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
}

export default TeacherDashboard;
