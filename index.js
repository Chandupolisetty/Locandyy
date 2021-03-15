var express = require('express');
var app = express()
const path = require('path')
const engines = require('consolidate')
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views'))


const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));

const port = process.env.PORT || 3000


// const MongoClient = require('mongodb').MongoClient  
// const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true });
// client.connect((err, database) => {
//   console.log("Connected to database.")
//   if (err) return console.log(err);
//   var database = database.db("locandyy");
//   app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })
// })

mongoose.connect("mongodb+srv://chandu1997:chandu1997@locandyy.yqxbv.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityDB_NAME=appdb", { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
  app.listen(3000, function () {
   console.log("Connected to Database")
  
})
}).catch((e) => {
 console.log(e,"--error")
})