const express = require("express");
const path = require("path");

const app = express();

// static files (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// calculator page
app.get("/calculator", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, () => {
  console.log("Calculator running on http://localhost:3000/calculator");
});

