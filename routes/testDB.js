const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let dbStatus = "trying to connect DB...";

router.get("/", (req, res, next) => {
  res.send(dbStatus);
});

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-express-mongo", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB Connected");
    dbStatus = "successfully connected";
  })
  .catch(err => {
    console.log(err);
    dbStatus = "failed to connect DB";
  });

module.exports = router;
