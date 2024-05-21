import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import('./Edit.css')

const EditServiceComponent = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/${id}`);
        const { title, description } = response.data;
        setTitle(title);
        setDescription(description);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };

    fetchService();
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/services/${id}`, { title, description });
      console.log(response.data);
      // Handle success message or redirect after updating
    } catch (error) {
      console.error('Error updating service:', error);
      // Handle error message
    }
  };

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className='form-container text-center border border-success p-3 mt-3 mb-3'>
      <h2 className="my-4">Edit Product</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label> Card Title</Form.Label>
          <Form.Control type="text" value={title} onChange={handleTitleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} value={description} onChange={handleDescriptionChange} />
        </Form.Group>
        <Button variant="primary text-center" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditServiceComponent;
