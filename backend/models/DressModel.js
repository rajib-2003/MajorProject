const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  price: { type: String, required: true },
  material: { type: String, required: true },
  origin: { type: String, required: true },
  actual_price: { type: String, required: true },
  discount: { type: String, required: true },
  image: { type: String, required: true },
  collection: { type: String, required: true }, // 'men' or 'women'
});

mongoose.model('Dress', dressSchema);
