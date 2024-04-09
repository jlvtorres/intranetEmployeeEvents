// Import express
const express = require("express");

// Initialize express app
const app = express();

app.set("view engine", "ejs");

// Specify a port
const PORT = process.env.PORT || 2000;

// Define a route for the root URL
app.get("/", (req, res) => {
      res.render("main");
});

// Start the server
app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
});
