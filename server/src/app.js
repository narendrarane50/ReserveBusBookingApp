const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const busData = require("./models/busData");

// Your code goes here

// Route to get a response with an array of busData from MongoDB Database
app.get("/busData", (req, res) => {
  const { From, To, DaysRunOn } = req.query;
  busData
    .find({ From, To, DaysRunOn })
    .then((data, err) => {
      if (!err) {
        res.json(data);
        res.end();
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send(err);
    });
});

module.exports = app;
