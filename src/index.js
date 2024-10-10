const { serverConfig, logger } = require("./config/");

const express = require('express');
const apiRoutes = require('./routes');


const app = express()

app.use('/api',apiRoutes)


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is ready ${serverConfig.PORT}`)
//    logger.info(`Server Started Succesfully : ${serverConfig.PORT}`)
    
  
})