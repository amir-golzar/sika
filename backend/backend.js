const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const body = require('body-parser');

const env = require('dotenv');
env.config()

const app=express()

app.use(cors({origin:"*"}))
app.use(body.json())

const mongodbUlr=mongoose.connect("mongodb://127.0.0.1:27017/config")

const userShema = new mongoose.Schema({


  });
  
 const Users = mongoose.model("sida", userShema);

 
  