var express = require('express');
var app = express();
var env = require('dotenv').config()
const path = require('path')
app.set('./views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.sendFile('./views/index.html', { root: __dirname });
});
const MongoClient = require('mongodb').MongoClient  


const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true });
client.connect((err, database) => {
  console.log("Connected to database.")
  if (err) return console.log(err);
  var database = database.db("locandyy");
 app.listen(3000, function () {
   return "Connected to Database"
   
 })
})