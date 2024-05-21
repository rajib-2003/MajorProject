import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
// import CartSummaryPage from './CartSummaryPage'; // Assuming you have this component
import './FoodCardPage.css'

const FoodCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/food');
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  const addToCart = (food) => {
    setCartItems([...cartItems, food]);
  };

  const removeFromCart = (food) => {
    const newCartItems = cartItems.filter((item) => item._id !== food._id);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <div className="food-items">
        {foodItems.map((food, index) => (
          <FoodCard
            key={index}
            food={food}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isAddedToCart={cartItems.some((item) => item._id === food._id)}
          />
        ))}
      </div>
      {/* <CartSummaryPage
        foodCartItems={cartItems}
        removeFromFoodCart={removeFromCart}
      /> */}
    </div>
  );
}

export default FoodCartPage;
