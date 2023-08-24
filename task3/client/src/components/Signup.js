import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      return;
    }

    try {
      await axios.post('http://localhost:8000/signup', formData);
      navigate('/signin'); // Redirect to signin page after successful signup
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateFormData = () => {
    const { name, email, password } = formData;

    // Validate name
    if (name.length < 3) {
      alert('Name must contain at least 3 characters');
      return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      alert('Invalid email format');
      return false;
    }

    // Validate password complexity
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordPattern)) {
      alert(
        'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'
      );
      return false;
    }

    return true;
  };

  return (
    <div className="container">
      {/* <div className="form-container"> */}
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Signin</Link>
        </p>
      {/* </div> */}
    </div>
  );
};

export default Signup;
