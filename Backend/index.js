const express = require("express");
const bodyParser = require("body-parser");
require("./db"); // datatbase connection
const User = require("./models/User");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const routes = require("./routes/authRoutes");
app.use(routes);

// app.post("/signup", (req, res) => {
//   res.send("signup page");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
