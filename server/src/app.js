const express = require("express");
const cors = require("cors");

const app = express();

// Built-in Middleware
app.use(express.json());
app.use(cors());

// Custom Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to MERN Backend");
});

module.exports = app;