 const {StatusCodes} = require('http-status-codes')

const info = (req,res)=>{
    
    return res.status(StatusCodes.ACCEPTED).json({
        success : true,
        desc : "API is live",
        msg : "Ok da Baadu"
    })

}


module.exports = {info};