import React, { useState } from "react";
import { Link } from "react-router-dom";

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    specialInstructions: "",
    country: "",
    townCity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending the data to a backend server
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="card w-50 mx-auto m-5" style={{ backgroundColor: "#ffd1ff" }}>
        <h2 className="mb-4">Delivery Address Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="postalCode" className="form-label">Postal Code</label>
            <input type="text" className="form-control" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="specialInstructions" className="form-label">Special Instructions</label>
            <textarea className="form-control" id="specialInstructions" name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="townCity" className="form-label">Town/City</label>
            <input type="text" className="form-control" id="townCity" name="townCity" value={formData.townCity} onChange={handleChange} required />
          </div>
          <Link to='/payment' className="btn btn-primary">Submit</Link>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
