const express = require("express");
const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Route
app.get("/", (req, res) => {
  res.render("index", { name: "Om", course: "Express + EJS" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 
