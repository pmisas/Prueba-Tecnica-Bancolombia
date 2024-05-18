const UbicacionActorRepository = require('../repositories/UbicacionRepository');
const ubicacionActorRepository = new UbicacionActorRepository();

class UbicacionActorService {

    async createUbicacionActor(data) {
        return await ubicacionActorRepository.createUbicacionActor(data);
    }

    async findUbicacionActorById(id) {
        return await ubicacionActorRepository.findUbicacionActorById(id);
    }

    async findAllUbicacionActores() {
        return await ubicacionActorRepository.findAllUbicacionActores();
    }

    async updateUbicacionActor(id, data) {
        return await ubicacionActorRepository.updateUbicacionActor(id, data);
    }

    async deleteUbicacionActor(id) {
        return await ubicacionActorRepository.deleteUbicacionActor(id);
    }
}

module.exports = UbicacionActorService;
