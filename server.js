const express = require("express");

const { getPropertyType } = require("./contorllers/AirbnbsController");
const cors = require("cors");
const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/aggregation");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/api/v1/property", getPropertyType);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
