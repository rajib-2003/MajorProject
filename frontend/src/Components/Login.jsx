import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './register.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email, // Ensure email is not empty
        password, // Ensure password is not empty
      });

      // Save token to local storage
      localStorage.setItem('token', response.data.token);

      console.log(response.data);
      navigate('/food-dress');
      // Notify user upon successful login
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      console.error(error);
      // Notify user if there's an error during login
      toast.error('Login failed. Please try again.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <div className='main'>
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className='form2'>
          <h2 className="heading">LOGIN</h2>
          <div className="mb-4 mt-5">
            <input
              type="email"
              className='form-control'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className='form-control'
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
