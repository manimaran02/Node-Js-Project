const  {AirplaneRepository} = require('../repositories')

const airplaneRepo = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepo.create(data)
        return airplane
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createAirplane
}