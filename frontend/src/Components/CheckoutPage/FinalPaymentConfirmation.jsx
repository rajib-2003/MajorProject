import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

const FinalPaymentConfirmation = ({ nextStep, prevStep }) => {
  const handlePlaceOrder = async () => {
    try {
      const stripe = await loadStripe("pk_test_51PHs5LSE0r6aEMOOSbOkm7F8PLvsprLugsz3xe4JfPXLVOwdoAfGWZniJyAReuvmOvkJRw2XhCKrInzuWFTB5jjT00XAzse1Lr");

      const body = {
        products: JSON.parse(localStorage.getItem("cartItems")) // Assuming cart items are stored in localStorage
      };
      
      const headers = { "Content-Type": "application/json" };
      
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.log(result.error.message);
      } else {
        nextStep();
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order. Please try again.");
    }
  };

  return (
    <Container>
      <h1 className="my-4">Confirm Your Order</h1>
      <Row>
        <Col>
          <Link to='/final-payment' className="btn btn-primary" onClick={handlePlaceOrder}>
            Confirm and Pay
          </Link>
          <Button variant="secondary" onClick={prevStep}>
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalPaymentConfirmation;
