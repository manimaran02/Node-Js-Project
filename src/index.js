const { serverConfig, Logger } = require("./config/");

const express = require('express');
const apiRoutes = require('./routes');


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api',apiRoutes)


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is ready ${serverConfig.PORT}`)
//    Logger.info(`Server Started Succesfully : ${serverConfig.PORT}`)
    
  
})