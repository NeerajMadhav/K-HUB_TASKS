import React, { useState } from 'react';
import axios from 'axios';
import './Signin.css';

const Signin = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/signin', formData);
      history.push('/home');
    } catch (error) {
      console.error('Signin failed', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signin;
