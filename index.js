  
var express = require('express');
var app = express();
var env = require('dotenv').config()
const mongoose = require("mongoose")
app.use(require('./routes/router'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000


mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
  app.listen(3000, function () {
  return "Connected to Database"
  
})
}).catch((e) => {
 console.log("Error"+e)
})