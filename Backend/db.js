const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    mongoose.set("strictQuery", false);
    console.log("Connected to database");
  })
  .catch((err) => console.log("Couldn't connect to database", err));
