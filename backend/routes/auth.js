const express = require("express");
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("../models/userModel");
const User = mongoose.model("userinfo");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
// Register endpoint


router.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;

  // Regular expression to check for at least one uppercase letter and one special character
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

  if (!passwordRegex.test(password)) {
    return res.json({ error: "Password must contain at least one uppercase letter and one special character" });
  }

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    
    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});




router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send({ status: "ok", message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", message: "An error occurred" });
  }
});




router.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      user.status = "active";
      user.loginTime = new Date();
      await user.save();

      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });

      return res.status(200).json({ status: "ok", data: token, userType: user.userType });
    } else {
      return res.status(401).json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
});

// Logout route
router.post("/logout-user", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.status = "inactive";
    user.logoutTime = new Date();
    await user.save();

    return res.status(200).json({ status: "ok", message: "User logged out successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
});

router.delete("/delete-login-user", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Reset login status and time
    user.status = "inactive";
    user.loginTime = null;

    // Optional: You may also want to invalidate any active tokens here

    await user.save();

    return res.status(200).json({ status: "ok", message: "Login user data deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
});

// Fetch user details
router.get('/user-details', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
});

//
router.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

router.get("/all-users", async (req, res) => {
  try {
    
    const users = await User.find({});
  
    res.json({ status: "ok", data: users });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
});

module.exports = router;
