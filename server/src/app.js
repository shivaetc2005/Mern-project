const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Welcome to MERN Backend");
});

module.exports = app;