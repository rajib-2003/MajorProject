import React, { useState } from 'react';
import './FoodCard.css';

const FoodCard = ({ food, addToCart, removeFromCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleButtonClick = () => {
    if (!isInCart) {
      addToCart(food);
    } else {
      removeFromCart(food);
    }
    setIsInCart(!isInCart);
  };

  return (
    <div className="food-card" style={{ backgroundColor: food.color }}>
      <img src={food.image} alt={food.name} />
      <div className="food-details">
        <h3>{food.name}</h3>
        <p>{food.details}</p>
        <ul>
          <li>{food.price}</li>
          <li><del>{food.actual_price}</del></li>
          <li style={{ color: 'red' }}>{food.discount}</li>
        </ul>
        <button onClick={handleButtonClick}>
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
