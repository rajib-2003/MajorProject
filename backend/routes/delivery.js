// routes/delivery.js

const express = require('express');
const router = express.Router();
const Delivery = require('../models/Delivery');

// Create a new delivery
router.post('/deliveries', async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json({ message: 'Delivery details saved successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get('/deliveries', async (req, res) => {
    try {
      const deliveries = await Delivery.find();
      res.status(200).json(deliveries);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
