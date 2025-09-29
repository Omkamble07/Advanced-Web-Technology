const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (css, js, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/skills", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "skills.html")); 
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
