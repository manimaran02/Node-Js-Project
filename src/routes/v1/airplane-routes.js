const express = require('express')
const {AirplaneController} = require('../../controllers/');
const { AirplaneMiddlewares } = require('../../middlewares');



const router = express.Router()

// api/v1/airplanes/ => POST request

router.post('/',AirplaneMiddlewares.validateCreateairplane,
                 AirplaneController.createAirplane);

// api/v1/airplanes/ => GET request

router.get('/', AirplaneController.getallAirplane);

// api/v1/airplanes/:id => GET request {:id} is params

router.get('/:id', AirplaneController.getAirplane);   

// api/v1/airplanes/:id => DELETE request {:id} is params

router.delete('/:id',AirplaneController.deleteAirplane)  

// api/v1/airplanes/:id => PATCH request {:id} is params

router.patch('/:id',AirplaneController.updateAirplane)

module.exports= router;