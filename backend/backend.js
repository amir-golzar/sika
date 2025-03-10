const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const body = require("body-parser");

const env = require("dotenv");
env.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(body.json());

const mongodbUlr = mongoose.connect("mongodb://127.0.0.1:27017/config");

const userShema = new mongoose.Schema({
  name: "String",
  dateB: "Number",
  pass: "Number",
  codemeli: "Number",
});

const Users = mongoose.model("sida", userShema);

app.post("/sida", (req, res) => {
  const { name, dateB, pass, codemeli } = req.body;

  const newStudent = new Users({ name, dateB, pass, codemeli });
  newStudent
    .save()
    .then((data) => {
      res.json({ message: "oky ast" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "eroreeeeeeeeeeeeeee", status: "oky" });
    });
});

app.listen(process.env.PORT);
