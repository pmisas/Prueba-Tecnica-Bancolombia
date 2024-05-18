const EscenaRepository = require('../repositories/EscenaRepository');
const escenaRepository = new EscenaRepository();

class EscenaService {

    async createEscena(data) {
        return await escenaRepository.createEscena(data);
    }

    async findEscenaById(id) {
        return await escenaRepository.findEscenaById(id);
    }

    async findAllEscenas() {
        return await escenaRepository.findAllEscenas();
    }

    async updateEscena(id, data) {
        return await escenaRepository.updateEscena(id, data);
    }

    async deleteEscena(id) {
        return await escenaRepository.deleteEscena(id);
    }

    async findEscenasByGuionId(guionId) {
        return await escenaRepository.findEscenasByGuionId(guionId);
    }

}

module.exports = EscenaService;
