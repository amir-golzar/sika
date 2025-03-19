const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  name: { type: "String", required: true },
  dateB: { type: "Number", required: true },
  pass: { type: "String", required: true },
  codemeli: { type: "Number", required: true },
  moadel: { type: "Number", default: 0 },
});
userShema.pre("save", async function () {
  console.log(this);
  console.log(this.pass);

  // this.pass = this.pass * 2;
  const salty=await bcrypt.genSalt(12)
  this.pass=await bcrypt.hash(this.pass,salty)
});

userShema.methods.matchPassword= async function (enterpass) {
  return await bcrypt.compare(enterpass,this.pass)
}

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
      res.status(500).json({ message: "erorr", status: "noky" });
    });
});
app.get("/sida", async (req, res) => {
  const theSttudent = await Users.find({}, { _id: false, __v: false });
  if (theSttudent) {
    res.json(theSttudent);
  }
});
app.delete("/sida", async (req, res) => {
  const { codemeli } = req.body;
  console.log(codemeli);

  const theSttudent = await Users.deleteOne({ codemeli: codemeli });

  if (theSttudent) {
    res.json("delete users");
  }
});
app.put("/sida", async (req, res) => {
  const { lessons, codemeli } = req.body;

  let numbers = Object.keys(lessons);
  let sum = 0;
  numbers.forEach((num) => (sum += lessons[num]));
  const v = sum / numbers.length;
  console.log(`miangin: ${v}`);
  console.log(codemeli);

  const update = await Users.updateOne({ codemeli }, { $set: { moadel: v } });
  if (update) {
    console.log(update);

    res.status(200).json({ message: "the usesr is updated", status: "yes" });
    return;
  }
  res.send(update);
});

app.listen(process.env.PORT);
