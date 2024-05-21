import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBin2Line } from "react-icons/ri";
const RegTableData = () => {
  const [userinfo, setUserinfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/all-users');
      setUserinfo(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${id}`);
      setUserinfo(userinfo.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container">
      <div className="table-responsive">
        <h2 className="text-center fw-bold"></h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark text-center">
            <tr>
              <th >FirstName</th>
              <th >LastName</th>
              <th >Email</th>
              <th>Password</th>
              <th>UserType</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userinfo.map((data, index) => (
              <tr key={index}>
                <td className="bg-info text-white">{data.fname}</td>
                <td className="bg-info text-white">{data.lname}</td>
                <td className="bg-info text-white">{data.email}</td>
                <td className="bg-info text-white">{data.password}</td>
                <td className="bg-info text-white">{data.userType}</td>
                <td>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => deleteUser(data._id)}
                  >
                  < RiDeleteBin2Line  />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegTableData;
