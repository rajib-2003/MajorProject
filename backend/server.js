const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const cardData = require("./routes/item");
const servicesController = require("./controller/cardDetails");
const deliveryRoutes = require('./routes/delivery');
const dressesRoute = require('./routes/dresses');
const foodRoute = require('./routes/Food');
const placeRoute = require('./routes/Place');
const contactRoute = require('./routes/contact')
const stripe = require("stripe")("sk_test_51PHs5LSE0r6aEMOOZGznouswDjIAKoDtSFdlSO80jkbLmsk0WXrS1LyWktfHL5lLDatQN3zNh3ggU5mrVPNRJi9K00aeYxDILD")


// const path = require('path');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

// dotenv.config();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/imageGallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Authentication Routes
app.use("/api", authRoutes);
// Delivery route
app.use('/api', deliveryRoutes);
// State data route
app.use('/api', dressesRoute);
app.use('/api', foodRoute);
app.use('/api', placeRoute);

// Contact us page
app.use('/api',contactRoute)




// For State Cards 
app.post(
  "/api/services",
  upload.single("image"),
  servicesController.addServices
);
app.get("/api/services", servicesController.getServices);
app.post("/api/services", servicesController.addServices);
app.put("/api/services/:id", servicesController.editService);
app.get("/api/services/:id", servicesController.getServiceById);

// Delete a service
app.delete("/api/services/:id", servicesController.deleteService);



app.post("/api/checkout", async (req, res) => {
  const { products } = req.body;
  
  // Log the received products for debugging
  console.log("Received products:", products);

  try {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100, // Ensure this is a number in cents
      },
      quantity: 1, // Ensure quantity is included
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error); // Log the error details
    res.status(500).json({ error: "An error occurred, please try again." });
  }
});


// Start server
app.listen(5000, () => {
  console.log(`Backend Running At Port 5000`);
});
