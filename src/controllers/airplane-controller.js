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

async function getallAirplane(req,res) {
    try {
        const airplanes = await AirplaneService.getAllAirplane()
       SuccessResponse.data = airplanes

       return res.status(StatusCodes.OK).json({SuccessResponse})
    } catch (error) {
        ErrorResponse.message = "Something went wrong in fetching airplane",
        ErrorResponse.error = error
        
        return res.status(error.statuscode).json(ErrorResponse)
    }
}


async function getAirplane(req,res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id)
       SuccessResponse.data = airplane

       return res.status(StatusCodes.OK).json({SuccessResponse})
    } catch (error) {
        ErrorResponse.message = "Something went wrong in fetching airplane",
        ErrorResponse.error = error
        
        return res.status(error.statuscode).json(ErrorResponse)
    }
}


async function deleteAirplane(req,res) {
    try {
        const response = await AirplaneService.deleteAirplane(req.params.id)
        SuccessResponse.data = response

       return res.status(StatusCodes.OK).json({SuccessResponse})
    } catch (error) {

        ErrorResponse.message = "Something went wrong in deleting airplane",
        ErrorResponse.error = error
        
        return res.status(error.statuscode).json(ErrorResponse)
    }
} 

async function updateAirplane(req,res) {
    
    try {
        res.data = req.body
        const response = await AirplaneService.updateAirplane(req.params.id,res.data)
        // console.log(response)
        SuccessResponse.data = response

       return res.status(StatusCodes.OK).json({SuccessResponse})
    } catch (error) {

        ErrorResponse.message = "Something went wrong in updating airplane",
        ErrorResponse.error = error
        
        return res.status(error.statuscode).json(ErrorResponse)
    }
} 



module.exports = {
    createAirplane,
    getallAirplane,
    getAirplane,
    deleteAirplane,
    updateAirplane
}