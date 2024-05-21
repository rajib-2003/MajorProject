import React from 'react';

const CartSummary = ({ cartItems }) => {
  // Calculate total cart price with discounts
  const totalCartPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    const discount = parseFloat(item.discount.replace('%', '')) / 100;
    return acc + (price * (1 - discount));
  }, 0);

  return (
    <div>
      <h1>Cart Summary</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalCartPrice.toFixed(2)}</h3>
      <button>Place Order</button>
    </div>
  );
};

export default CartSummary;
