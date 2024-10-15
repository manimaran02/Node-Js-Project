const { StatusCodes } = require('http-status-codes')
const {AirplaneService} = require('../services')
const { error } = require('winston')
const {SuccessResponse,ErrorResponse} = require('../utils/common')

async function createAirplane(req,res) {
    try {
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        })

    //    console.log(airplane)
        
        SuccessResponse.data = airplane
        SuccessResponse.message = "Successfully created airplane"

        return res.status(StatusCodes.CREATED).json({SuccessResponse})
    } catch (error) {

        ErrorResponse.message = "Something went wrong in creating airplane",
        ErrorResponse.error = error
        
        return res.
        status(error.statuscode).json(ErrorResponse)
    }
}


module.exports = {
    createAirplane
}