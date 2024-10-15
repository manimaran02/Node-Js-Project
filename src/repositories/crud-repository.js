const { where } = require('sequelize')
const {Logger} = require('../config')

class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
            const response = await this.model.create(data)
            return response
        
    }


    async delete(data){
        try {
            const response = await this.model.delete({
                where : {
                    id : data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went ewrong in : delete')
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud Repo')
            throw error
            
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll()
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud Repo')
            throw error
            
        }
    }

    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where : {
                    id:id
                }
            })
            return response
        } catch (error) {
            Logger.error('Something went wrong in crud Repo')
            throw error
            
        }
    }
    

}


module.exports = CrudRepository;