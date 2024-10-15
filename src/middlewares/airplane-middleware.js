const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils/common')

function validateCreateairplane(req,res,next){


    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong"
        ErrorResponse.error =  {explanation : "User enterd wrong modelNumber"}
    
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}


module.exports = {
    validateCreateairplane
};
