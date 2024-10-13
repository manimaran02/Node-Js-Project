const { StatusCodes } = require("http-status-codes");

function validateCreateairplane(req,res,next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success : false,
            message : "Something went wrong",
            data : {},
            error : {explanation : "User enterd wrong modelNumber"}
        });
    }

    next();
}


module.exports = {
    validateCreateairplane
};
