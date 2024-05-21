const GuionRepository = require('../Repositories/GuionRepository');
const guionRepository = new GuionRepository();

class GuionService {

    async create(data){
        return await guionRepository.createGuion(data);
    }

    async findGuionById(id) {
        return await guionRepository.findGuionById(id);
    }

    async findAll() {
        return await guionRepository.findAllGuion();
    }

    async updateGuion(id, data) {
        return await guionRepository.updateGuion(id, data);
    }

    async deleteGuion(id) {
        return await guionRepository.deleteGuion(id);
    }

    async findAllByGuionistaId(guionistaId) {
        return await guionRepository.findAllGuionByGuionistaId(guionistaId);
    }
    

}

module.exports = GuionService;
