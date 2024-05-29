import React from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

const CartSummaryPage = ({ foodCartItems, dressCartItems, removeFromFoodCart, removeFromDressCart }) => {
  const calculateTotalPrice = (cartItems) => {
    if (!cartItems) return 0; // Check if cartItems is undefined
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      const discount = parseFloat(item.discount.replace("%", "")) / 100;
      return acc + price * (1 - discount);
    }, 0);
  };

  const totalFoodPrice = calculateTotalPrice(foodCartItems);
  const totalDressPrice = calculateTotalPrice(dressCartItems);
  const totalPrice = totalFoodPrice + totalDressPrice;

  const handlePlaceOrder = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51PHs5LSE0r6aEMOOSbOkm7F8PLvsprLugsz3xe4JfPXLVOwdoAfGWZniJyAReuvmOvkJRw2XhCKrInzuWFTB5jjT00XAzse1Lr"
      );

      const body = { 
        products: [
          ...foodCartItems.map(item => ({
            name: item.name,
            price: (parseFloat(item.price.replace("$", "")) * (1 - parseFloat(item.discount.replace("%", "")) / 100)).toFixed(2)
          })),
          ...dressCartItems.map(item => ({
            name: item.name,
            price: (parseFloat(item.price.replace("$", "")) * (1 - parseFloat(item.discount.replace("%", "")) / 100)).toFixed(2)
          }))
        ]
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
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order. Please try again.");
    }
  };

  return (
    <Container>
      <h1 className="my-4">Cart Summary</h1>
      
      <ListGroup>
        {foodCartItems && foodCartItems.map((item, index) => ( // Check if foodCartItems is defined
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <Image
              src={item.image}
              alt={item.name}
              style={{ width: "150px", height: "150px", marginRight: "10px" }}
              rounded
            />
            <div className="flex-grow-1">
              <h5>{item.name}</h5>
              <p>{item.price}</p>
            </div>
            <Button
              variant="danger"
              onClick={() => removeFromFoodCart(item)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ListGroup>
        {dressCartItems && dressCartItems.map((item, index) => ( // Check if dressCartItems is defined
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <Image
              src={item.image}
              alt={item.name}
              style={{ width: "150px", height: "150px", marginRight: "10px" }}
              rounded
            />
            <div className="flex-grow-1">
              <h5>{item.name}</h5>
              <p>{item.price}</p>
            </div>
            <Button
              variant="danger"
              onClick={() => removeFromDressCart(item)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row className="mt-4">
        <Col>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </Col>
        <Col className="text-right">
          <Button className="btn btn-primary" onClick={handlePlaceOrder}>
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartSummaryPage;
