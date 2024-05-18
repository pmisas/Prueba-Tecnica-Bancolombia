const Guion = require('../db/Models/guionModels')

class GuionRepository {

    async createGuion(data){
        return await Guion.create(data);
    }

    async findAllGuion() {
        return await Guion.findAll();
    }

    
}

module.exports = GuionRepository;
