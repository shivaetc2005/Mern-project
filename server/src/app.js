const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to MERN Backend");
});

app.use("/api/todos", todoRoutes);
app.use(errorHandler);
module.exports = app;