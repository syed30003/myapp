const express = require("express");
const path = require("path");

const app = express();

// static files
app.use(express.static(path.join(__dirname, "public")));

// change this 👇
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Calculator running on port 4000");
});
