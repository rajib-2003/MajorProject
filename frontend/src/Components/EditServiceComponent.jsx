import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Edit.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditServiceComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageUrlRef = useRef(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/${id}`);
        console.log('Response data:', response.data);

        const serviceData = response.data.data;

        if (serviceData && titleRef.current && descriptionRef.current && imageUrlRef.current) {
          // Set default values if data is not available
          titleRef.current.value = serviceData.title || '';
          descriptionRef.current.value = serviceData.description || '';
          imageUrlRef.current.value = serviceData.imageUrl || '';
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service:', error);
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const imageUrl = imageUrlRef.current.value;

    if (title && description && imageUrl) {
      try {
        const response = await axios.put(`http://localhost:5000/api/services/${id}`, { title, description, imageUrl });
        console.log('Update response data:', response.data);

        // Clear the input fields after successful update
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        imageUrlRef.current.value = '';

        // Show toast
        toast.success('Service updated successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Navigate to another page after update
        setTimeout(() => {
          navigate('/state');
        }, 3000); // Adjust the delay time as needed
      } catch (error) {
        console.error('Error updating service:', error);
      }
    } else {
      console.log('Please fill out all fields');
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
    <Container className="form-container text-center border border-success p-3 mt-3 mb-3">
      <h2 className="my-4">Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Card Title</Form.Label>
          <Form.Control type="text" ref={titleRef} defaultValue="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} ref={descriptionRef} defaultValue="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" ref={imageUrlRef} defaultValue="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditServiceComponent;
