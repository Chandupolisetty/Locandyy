"use strict";

const express=require('express')
const app=express.Router()
var LocationSchema = require('../models/location')
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// create the location
app.post('/createLocation', async (req, res) => {
    const location = new LocationSchema({
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });
     location.save(err => {
             if(err) {
                res.send('error'+err)
             }
                 res.send(location);
      } )
})

// List all the locations

app.get('/', async(req,res) =>{
        const locations = await LocationSchema.find()
        res.json(locations)
    if(err){
        res.send('Error' + err)
    }
})

// Get the loaction by Id

app.get('/getLocation/:id', async(req, res) =>{
    
        const location = await LocationSchema.findById(req.params.id)
        res.json(location)
    
    if(err){
        res.send('Error' + err)
    }
})


// Update the location

app.put('/editLocation/:id', async(req, res) =>{
    const id = parseInt(req.params.id)
    
        const updateLocation = LocationSchema.updateOne({ _id: id},{
            $set: {
                locationName : req.body.locationName,
            }
            
        })
        res.json(updateLocation)
       
    if(err){
        res.send('Error' + err)
    }
})

// Delete Location 

app.delete('/deleteLocation', async (req, res) => {
      LocationSchema.deleteOne(req.body)
          if(err) {
        let status = err.status || err.statusCode || err.code || 500;
res.status(status).send({ status, error: err });
     }
         res.send({ status: 200, response: "Location deleted Successfully" });
    })


module.exports = app;
