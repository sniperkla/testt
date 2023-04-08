const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.get("/test", (req, res) => {
  res.send("Hello, world!");
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
