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

}

module.exports = GuionService;

/*
const GuionRepository = require('../Repositories/GuionRepository');
const guionRepository = new GuionRepository();
const EscenaService = require('../Services/EscenaService');
const escenaService = new EscenaService();

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
        const deletedGuion = await guionRepository.deleteGuion(id);

        if (deletedGuion) {

            const deletedEscenas = await escenaService.findEscenasByGuionId(id);
            

            if (deletedEscenas && deletedEscenas.length > 0) {
                for (const escena of deletedEscenas) {
                    await escenaService.deleteEscena(escena.id);
                }
            }
        }
        return deletedGuion;
    }

}

module.exports = GuionService;
*/