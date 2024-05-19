const AccionRepository = require('../repositories/AccionRepository');
const accionRepository = new AccionRepository();

class AccionService {
    async createAccion(data) {
        return await accionRepository.createAccion(data);
    }

    async findAccionById(id) {
        return await accionRepository.findAccionById(id);
    }

    async findAllAcciones() {
        return await accionRepository.findAllAcciones();
    }

    async updateAccion(id, data) {
        return await accionRepository.updateAccion(id, data);
    }

    async deleteAccion(id) {
        return await accionRepository.deleteAccion(id);
    }
}

module.exports = AccionService;
