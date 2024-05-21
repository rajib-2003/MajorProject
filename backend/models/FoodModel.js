const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  price: { type: String, required: true },
  actual_price: { type: String, required: true },
  discount: { type: String, required: true },
  image: { type: String, required: true },
  color: { type: String, required: true },
});

mongoose.model('Food', foodSchema);
