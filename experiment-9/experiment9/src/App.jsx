import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State for form inputs (Controlled Components)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});
  // State for API data
  const [users, setUsers] = useState([]);
  // State to track successful submission
  const [submitted, setSubmitted] = useState(false);

  // useEffect: Fetching API data on component mount
  useEffect(() => {
    // Simulating an API call
    const fetchData = () => {
      const apiData = [
        { id: 1, name: 'ABCD', email: 'abcd@gmail.com' }
      ];
      setUsers(apiData);
    };

    fetchData();
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple Form Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="main-container">
      <div className="registration-card">
        <h1>Registration Form</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="btn-register">Register</button>
        </form>

        {submitted && (
          <div className="success-area">
            <p className="success-msg">Registration Successful!</p>
            <div className="data-display">
              <h3>Registered Users</h3>
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;