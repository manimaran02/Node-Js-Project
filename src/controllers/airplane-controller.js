const { StatusCodes } = require('http-status-codes')
const {AirplaneService} = require('../services')
const { error } = require('winston')

async function createAirplane(req,res) {
    try {
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        })

        console.log(airplane)
        
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : "Successfully created airplane",
            data : airplane,
            error : {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "Something went wrong",
            data : {},
            error : error
        })
    }
}


module.exports = {
    createAirplane
}