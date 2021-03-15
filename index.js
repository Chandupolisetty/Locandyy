var express = require('express');
var app = express();
var env = require('dotenv').config()
const path = require('path')
const engines = require('consolidate')
const bodyParser = require('body-parser');


app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views'))
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.sendFile('./views/index.html', { root: __dirname });
});


const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));


const MongoClient = require('mongodb').MongoClient  
const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true });
client.connect((err, database) => {
  console.log("Connected to database.")
  if (err) return console.log(err);
  var database = database.db("locandyy");
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
})