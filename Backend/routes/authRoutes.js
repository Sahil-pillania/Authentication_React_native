const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

require("dotenv").config();

// nodemailer
async function mailer(receiverEmail, code) {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sahiltest03@gmail.com", // generated ethereal user
      pass: "zqbefgyodnfzlyls", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Confirm messege - Verification", // sender address
    to: `${receiverEmail}`, // list of receivers
    subject: "Signup verification", // Subject line
    text: "Please verify your code.", // plain text body
    html: `<b>Your verification code is: ${code}</b>`, // html body
  });
  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

router.post("/signup", async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password, dob, address } = req.body;

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
        address,
      });
      await newUser.save();
      //   res.send({ message: "user has been registered" });
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
      res.cookie("token", token);
      res.send({ token, data: "User created successfully." });
    }
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Internal server error: " + error.message });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { name, email, password, dob, address } = req.body;

    if (!name || !email || !password || !dob || !address) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User is already registered" });
    } else {
      // mail send
      code = Math.floor(100000 + Math.random() * 900000);
      let user = [
        {
          name,
          email,
          password,
          dob,
          address,
          code,
        },
      ];
      const response = await mailer(email, code);
      res.send({
        message: "Verification code sent to your email address",
        user,
      });
    }
  } catch (error) {
    console.log("error occured - catch statement");
    return res.status(200);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // res.send("matched");
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res.cookie("token", token);
      res.send({ token });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {}
});
module.exports = router;
