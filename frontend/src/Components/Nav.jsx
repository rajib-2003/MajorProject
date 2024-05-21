import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegRegistered } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
const Nav = () => {
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const userType = window.localStorage.getItem("userType");
    setUserType(userType);
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <header className="p-3 bg-success text-white m-0 text-center" >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width={40}
              height={32}
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
             <span>< FaHome/> </span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/state" className="nav-link px-2 text-white">
              <span>< FaLayerGroup /> </span>
                All State
              </Link>
            </li>
            {userType === "Admin" && (
              <li>
                <Link to="/dashboard" className="nav-link px-2 text-white">
                  <span> < MdDashboard /> </span>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            {userType !== "Admin" && (
              <Link to="/sign-in" className="btn btn-warning me-2">
                Register < FaRegRegistered />
              </Link>
            )}
              <Link onClick={logOut} className="btn btn-danger me-2">
              <IoLogOutOutline />
            </Link>
            <Link to="/cart-summary" className="btn btn-primary me-2">
        <PiShoppingCartSimpleBold/>
      </Link>
          
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
