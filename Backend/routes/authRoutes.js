const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

router.post("/signup", async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password, dob } = req.body;

    if (!name || !email || !password || !dob) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User is already registered" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
        dob,
      });
      await newUser.save();
      //   res.send({ message: "user has been registered" });
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
      res.cookie("token", token);
      res.send({ token });
    }
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Internal server error: " + error.message });
  }
});

module.exports = router;
