const express = require("express");
const bodyParser = require("body-parser");
require("./db"); // datatbase connection
const User = require("./models/User");
const app = express();
const port = 3000;
app.use(bodyParser.json());
const requireToken = require("./middleware/Auth");

app.get("/", requireToken, (req, res) => {
  // console.log(req.user);
  res.send(req.user);
});

const routes = require("./routes/authRoutes");
app.use(routes);

// app.post("/signup", (req, res) => {
//   res.send("signup page");
// });

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});
