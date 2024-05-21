// Form.js
import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ fetchCards }) => {
  const [stateName, setStateName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('stateName', stateName);
      formData.append('description', description);
      formData.append('image', image);

      await axios.post('http://localhost:3000/api/cards', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchCards(); // Fetch cards after adding a new one
      setStateName('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>State Name:</label>
            <input type="text" className="form-control" value={stateName} onChange={(e) => setStateName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input type="file" className="form-control-file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-primary">Add Card</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
