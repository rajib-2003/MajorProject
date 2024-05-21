import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <div className="container">
      <div className="card w-50 mx-auto m-5" style={{ backgroundColor: "#ffd1ff" }}>
        <h2 className="mb-4">Order Confirmation</h2>
        <p>Your order has been successfully placed.</p>
        <p>Thank you for shopping with us!</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
