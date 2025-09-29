// Import express
const express = require("express");
const app = express();
const port = 3000;

// Static Route
app.get("/", (req, res) => {
  res.send("Welcome to Dynamic Routing Example!");
});

// Dynamic Route with URL parameter
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID received from URL is: ${userId}`);
});

// Another example with multiple parameters
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Category: ${category}, Product ID: ${id}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

