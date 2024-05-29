const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/DressModel');
const Dress = mongoose.model('Dress');

// Serve static images
router.use('/images', express.static(path.join(__dirname, 'images')));

// Route to get men's dresses
router.get('/men-dresses', async (req, res) => {
  try {
    const menDresses = await Dress.find({ collection: 'men' });
    res.json(menDresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get women's dresses
router.get('/women-dresses', async (req, res) => {
  try {
    const womenDresses = await Dress.find({ collection: 'women' });
    res.json(womenDresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Function to insert initial data
const insertInitialData = async () => {
  const initialDresses = [
    {
      name: "Formal Suit",
      details: "Tailored fit suit, perfect for formal occasions",
      price: "$199.99",
      material: "Silk or Cotton",
      origin: "Andhra Pradesh, India",
      actual_price: "$220.99",
      discount: "50%",
      image: "/images/wb.jpg",
      collection: "men"
    },
    {
      name: "Casual Shirt",
      details: "Comfortable cotton shirt for everyday wear",
      price: "$49.99",
      material: "Pure Silk",
      origin: "Andhra Pradesh, India",
      actual_price: "$100.99",
      discount: "50%",
      image: "/images/roll2.jpg",
      collection: "men"
    },
    {
      name: "Summer Dress",
      details: "Light and flowy dress, perfect for summer days",
      price: "$59.99",
      actual_price: "$120.99",
      discount: "50%",
      material: "Silk or Cotton",
      origin: "Andhra Pradesh, India",
      image: "/images/women1.avif",
      collection: "women"
    },
    {
      name: "Maxi Skirt",
      details: "Elegant long skirt, suitable for various occasions",
      price: "$39.99",
      actual_price: "$60.99",
      discount: "50%",
      material: "Pure Silk",
      origin: "Andhra Pradesh, India",
      image: "/images/women2.avif",
      collection: "women"
    },
    {
      name: "kurta",
      details: "Elegant long skirt, suitable for various occasions",
      price: "$39.99",
      actual_price: "$60.99",
      discount: "50%",
      material: "Pure Silk",
      origin: "West bangal, India",
      image: "/images/wb.jpg",
      collection: "women"
    }
  ];

  try {
    await Dress.insertMany(initialDresses);
  } catch (error) {
    console.error('Error inserting initial data:', error);
  }
};

// Uncomment the following line to insert initial data
// insertInitialData();

module.exports = router;
