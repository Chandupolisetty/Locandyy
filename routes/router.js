const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const locationController = require('../controllers/locationcontroller');
const render = require('../seed');



router.get('/index', (req, res,next) => {
  res.render('../views/index', { title: 'index' })
})
router.get('/show',render.show);

router.get('/location/chandu', locationController.show)

router.get('/location/', locationController.findAll);

router.post('/location/', locationController.create);




module.exports = router;