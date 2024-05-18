const GuionRepository = require('../Repositories/GuionRepository');
const guionRepository = new GuionRepository();

class GuionService {

    async create(data){
        return await guionRepository.createGuion(data);
    }

    async findAll() {
        return await guionRepository.findAllGuion();
    }

}

module.exports = GuionService;
