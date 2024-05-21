const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Card = require('../models/cardModels');




// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });


// // get cards
// router.get('/cards', async (req, res) => {
//   try {
//     const cards = await Card.find();
//     res.json(cards);
//   } catch (err) {
//     console.error('Error fetching cards:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // POST a new card
// router.post('/cards', upload.single('image'), async (req, res) => {
//     const { stateName, description } = req.body;
//     const image = req.file ? req.file.path : ''; // Path to uploaded image
    
//   console.log(image)
//     try {
//       const newCard = new Card({
//         stateName,
//         description,
//         image
//       });
//       await newCard.save();
//       res.status(201).json(newCard);
//     } catch (err) {
//       console.error('Error adding card:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
  // PUT route to update a card by ID
router.put('/cards/:id', upload.single('image'), async (req, res) => {
  const { stateName, description } = req.body;
  const image = req.file ? req.file.path : ''; // Path to updated image

  try {
    const cardId = req.params.id;

    
    const card = await Card.findById(cardId);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

  
    card.stateName = stateName;
    card.description = description;
    card.image = image;

    
    await card.save();

    res.json(card);
  } catch (err) {
    console.error('Error updating card:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// DELETE route to delete a card by ID
router.delete('/cards/:id', async (req, res) => {
  const cardId = req.params.id;
  console.log(cardId)
  try {
    const cardId = req.params.id;
    console.log(cardId)
    // Check if the card exists
    const card = await Card.findById(cardId);
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

    // Delete the card
    await card.remove();

    res.json({ message: 'Card deleted successfully' });
  } catch (err) {
    console.error('Error deleting card:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports = router;