const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authorization.replace("Bearer ", "");
  //   console.log(token);

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const { _id } = payload;
    const user = await User.findOne(_id);
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = user;
    console.log(user);
  });
  next();
};
