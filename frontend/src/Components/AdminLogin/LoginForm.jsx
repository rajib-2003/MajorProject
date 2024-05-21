import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import './regform.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromSignUp) {
      setTimeout(() => {
        toast.success("Welcome to the login page!");
      }, 2000); // Delay of 2 seconds
    }
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          toast.success("Login successful");
          // Store token and userType in localStorage
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("userType", data.userType); // Set userType in localStorage

          // Redirect based on userType after a short delay
          setTimeout(() => {
            if (data.userType === "Admin") {
              window.location.href = "./dashboard";
            } else {
              window.location.href = "./food-dress"; // Redirect to other routes for non-admin users
            }
          }, 3000); // Delay of 3 seconds for user to see the toast
        } else if (data.status === "error" && data.error === "User Exists") {
          toast.error("User already exists");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        toast.error("An error occurred");
        console.error(error);
      });
  }

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="auth-inner border rounded p-4 shadow">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
