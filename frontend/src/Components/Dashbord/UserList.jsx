import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css'; // Import CSS file for additional styling if needed
import { RiDeleteBin3Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const UserList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/services');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (!confirmed) return;

        try {
            // Implement your delete logic here
            // Assuming you have an API endpoint to delete a user by ID
            await fetch(`http://localhost:5000/api/services/${id}`, {
                method: 'DELETE',
            });

            // Update the data array to remove the deleted user
            setData(data.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(data)) {
        console.error('Users data is not an array:', data);
        return <div>Error: Users data is not an array</div>;
    }

    return (
        <div className="container mt-4">
            <h2>STATE LIST</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead >
                        <tr>
                            <th className='bg-success text-white text-center'>ID</th>
                            <th className='bg-success text-white text-center'>Title</th>
                            <th className='bg-success text-white text-center'>Description</th>
                            <th className='bg-success text-white text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.title}</td>
                                <td>{user.description}</td>
                                <td className='d-flex'>
                                    
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-danger m-1">< RiDeleteBin3Line/></button>
                                   <span>
                                   <Link to={`/update-card/${user._id}`} className="btn btn-warning m-1">< FaEdit/></Link>
                                    </span> 
                                    <span>
                                    <Link to='/add-card' className="btn btn-success m-1">< IoMdAdd/></Link>

                                    </span>
                              
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
