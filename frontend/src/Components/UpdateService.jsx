import React, { useState } from 'react';
import axios from 'axios';

const UpdateServiceForm = ({ serviceId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdate = async () => {
    try {
      // Check if serviceId is defined before making the request
      if (!serviceId) {
        throw new Error('Service ID is undefined');
      }

      const response = await axios.put(`http://localhost:5000/api/services/${serviceId}`, {
        title,
        description
      });

      console.log(response);

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        // Clear the form fields after successful update
        setTitle('');
        setDescription('');
      } else {
        setError('Failed to update service: Internal Server Error');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Failed to update service: Internal Server Error');
    }
  };

  return (
    <div>
      <h2>Update Service</h2>
      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleUpdate}>Update Service</button>
    </div>
  );
};

export default UpdateServiceForm;
