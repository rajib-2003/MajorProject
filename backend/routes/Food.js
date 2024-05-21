const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/FoodModel');
const Food = mongoose.model('Food');

// Route to get all food items
router.get('/food', async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Function to insert initial food data
const insertInitialData = async () => {
  const initialFood = [
    {
      name: 'Formal Suit',
      details: 'Tailored fit suit, perfect for formal occasions',
      price: '$199.99',
      actual_price: '$299',
      discount: '50%',
      image: '/images/food1.jpeg',
      color: '#333333'
    },
    {
      name: 'Casual Shirt',
      details: 'Comfortable cotton shirt for everyday wear',
      price: '$49.99',
      actual_price: '$299',
      discount: '50%',
      image: '/images/food2.jpeg',
      color: '#3366FF'
    },
    // Add more initial food data here
  ];

  try {
    await Food.insertMany(initialFood);
   
  } catch (error) {
    console.error('Error inserting initial data:', error);
  }
};

// Uncomment the following line to insert initial data
insertInitialData();

module.exports = router;
