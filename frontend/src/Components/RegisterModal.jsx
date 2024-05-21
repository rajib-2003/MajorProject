import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';

function RegisterModal({ isOpen, onClose }) {
  const [fname, setFirstname] = useState('');
  const [lname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

    // Input validations
    if (!fname) {
      toast.error("First name is required");
      return;
    }
    
    if (!lname) {
      toast.error("Last name is required");
      return;
    }
    
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter and one special character");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        fname,
        lname,
        email,
        password,
      });
      console.log(response.data);
      toast.success("Registration successful");
      setTimeout(() => {
        navigate('/login', { state: { fromSignUp: true } });
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  return (
    <div
      className={`modal ${isOpen ? 'show' : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document" >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              <FaRegWindowClose/>
            </button>
          </div>
          <div className="modal-body h-75">
            <form onSubmit={handleSubmit} className="form1">
              <h2 className="heading">SIGN UP</h2>
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary signbtn">
                SIGN UP
              </button>
              <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterModal;
