import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user-details");
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Function to format timestamp into a readable format
  const formatTimestamp = (timestamp) => {
    return timestamp ? new Date(timestamp).toLocaleString() : "N/A";
  };

  // Function to handle user logout
  const logoutUser = async (email) => {
    try {
      const response = await axios.post("http://localhost:5000/api/logout-user", { email });
      if (response.data.status === "ok") {
        setUserData((prevData) =>
          prevData.map((user) =>
            user.email === email ? { ...user, status: "inactive", logoutTime: new Date() } : user
          )
        );
        console.log("User logged out successfully");
      } else {
        console.error("Error logging out user:", response.data.error);
      }
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  };

  // Function to handle deleting login user data
  const deleteLoginUserData = async (email) => {
    try {
      const response = await axios.delete("http://localhost:5000/api/delete-login-user", { data: { email } });
      if (response.data.status === "ok") {
        setUserData((prevData) => prevData.filter((user) => user.email !== email));
        console.log("Login user data deleted successfully");
      } else {
        console.error("Error deleting login user data:", response.data.error);
      }
    } catch (error) {
      console.error("Error deleting login user data:", error);
    }
  };

  return (
    <div>
      <h2 className="text-center">Login Information</h2>
      <table className="fw-bold">
        <thead>
          <tr>
            {/* <th className="bg-info">First Name</th>
            <th className="bg-info">Last Name</th> */}
            <th className="bg-info">Email</th>
            <th className="bg-info">User Type</th>
            <th className="bg-info">Login Time</th>
            <th className="bg-info">Logout Time</th>
            <th className="bg-info">Status</th>
            <th className="bg-info">Actions</th>
            <th className="bg-info">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              {/* <td className="bg-warning">{user.fname}</td>
              <td className="bg-warning">{user.lname}</td> */}
              <td className="bg-success text-white">{user.email}</td>
              <td className="bg-secondary text-white">{user.userType || "User"}</td>
              <td className="bg-danger text-white">{formatTimestamp(user.loginTime)}</td>
              <td className="bg-warning text-white">{formatTimestamp(user.logoutTime)}</td>
              <td>
                {user.status === "active" ? (
                  <button className="btn btn-success">Active</button>
                ) : (
                  <button className="btn btn-secondary">Inactive</button>
                )}
              </td>
              <td>
                {user.status === "active" ? (
                  <>
                    <button className="btn btn-danger" onClick={() => logoutUser(user.email)}>
                      < RiLogoutBoxRLine/>
                    </button>
                 
                  </>
                ) : (
                  <span className="btn btn-secondary"><BiLogIn/></span>
                )}
              </td>
              <td>   <button className="btn btn-danger ms-2" onClick={() => deleteLoginUserData(user.email)}>
                     < RiDeleteBin2Line />
                    </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
