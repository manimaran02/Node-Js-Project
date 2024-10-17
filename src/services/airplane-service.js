const { StatusCodes } = require('http-status-codes');
const  {AirplaneRepository} = require('../repositories')

const AppError = require('../utils/errors/app-error')

const airplaneRepo = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepo.create(data)
        return airplane
    } catch (error) {
        
        if(error.name === 'SequelizeValidationError'){
            let explanation = []

            error.errors.forEach((err) =>{
                explanation.push(err.message)
            })

            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }

         throw new AppError ('cannot create a new airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirplane() {
    try {
        const airplanes = await airplaneRepo.getAll()
        return airplanes
    } catch (error) {
        throw new AppError ('cannot  fetch all airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepo.get(id)
        return airplane
    } catch (error) {
        if(error.statuscode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane requested is not found',StatusCodes.NOT_FOUND)
        }
        throw new AppError ('cannot  fetch  airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function deleteAirplane(id){
    try {
        const response = await airplaneRepo.destroy(id)
        return response
    } catch (error) {
        if(error.statuscode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane requested is not found',StatusCodes.NOT_FOUND)
        }
        throw new AppError ('cannot  delete airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id,data){
    try {
        const response = await airplaneRepo.update(id,data)
        return response
    } catch (error) {
        if(error.statuscode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane requested is not found',StatusCodes.NOT_FOUND)
        }
        throw new AppError ('cannot  update airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAllAirplane,
    getAirplane,
    deleteAirplane,
    updateAirplane
}