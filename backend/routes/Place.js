const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/PlaceModel');
const Place = mongoose.model('Place');

// Route to get all places
router.get('/places', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Function to insert initial place data
const insertInitialData = async () => {
  const initialPlaces = [
    {
      name: 'Araku Valley',
      image: '/images/place1.jpg',
      description: "Araku Valley is a hill station in the Eastern Ghats of the state of Andhra Pradesh in India. It's known for its coffee plantations and tribal culture.",
      location: 'Visakhapatnam',
    },
    {
      name: 'Tirupati',
      image: '/images/place2.jpg',
      description: "Tirupati is a city in the Indian state of Andhra Pradesh. Its Sri Venkateswara Temple sits atop one of the the 7 peaks of Tirumala Hills, attracting scores of Hindu pilgrims.",
      location: 'Chittoor',
    },
    // Add more initial place data here
  ];

  try {
    await Place.insertMany(initialPlaces);
    console.log('Initial data inserted');
  } catch (error) {
    console.error('Error inserting initial data:', error);
  }
};

// Uncomment the following line to insert initial data
insertInitialData();

module.exports = router;
