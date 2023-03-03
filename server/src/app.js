const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const busData = require("./models/busData");
const addUserDetails = require("./models/addUserDetails")

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

app.use(express.json())
app.post("/addUserDetails", (req,res)=>{
  const { Name, Gender, Age, Email, MobileNo } = req.body;
  const addUser = new addUserDetails({
    Name,
    Gender,
    Age,
    Email,
    MobileNo
  })
  addUser.save().then(
    (data, err) => {
      if (!err) {
        res.json(data);
        res.end();
      }
    }
  ).catch((err) => {
    res.status(500).send({ err });
  });
})

module.exports = app;
