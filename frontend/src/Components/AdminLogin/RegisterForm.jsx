import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './regform.css'; // Import custom CSS for additional styles

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === "Admin" && secretKey !== "RajiB_MahatA") {
      toast.error("Invalid Admin");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter and one special character");
      return;
    }

    fetch("http://localhost:5000/api/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
        userType,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        toast.success("Registration Successful");
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Delay of 3 seconds
      } else {
        toast.error("Something went wrong");
      }
    })
    .catch((error) => {
      toast.error("An error occurred");
      console.error(error);
    });
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="auth-inner border rounded p-4 shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Sign Up</h3>
          <div className="form-group m-2">
            <div className="radio-btn pt-0 text-center">
              <input
                type="radio"
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
              />{" "}
              User
              <input
                type="radio"
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
                className="ml-3"
              />{" "}
              Admin
            </div>
          </div>
          {userType === "Admin" && (
            <div className="form-group">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control "
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block custom-btn">
            Sign Up
          </button>
          <p className="forgot-password text-center mt-3">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
