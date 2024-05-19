const EscenaActorRepository = require('../Repositories/EscenaActorRepository');
const escenaActorRepository = new EscenaActorRepository()

class EscenaActorService {
    async createEscenaActor(data) {
        return await escenaActorRepository.createEscenaActor(data);
    }

    async findEscenaActorById(id) {
        return await escenaActorRepository.findEscenaActorById(id);
    }

    async findEscenaActoresByEscenaId(escenaId) {
        return await escenaActorRepository.findEscenaActoresByEscenaId(escenaId);
    }

    async findEscenaActoresByActorId(actorId) {
        return await escenaActorRepository.findEscenaActoresByActorId(actorId);
    }

    async findAllEscenaActores() {
        return await escenaActorRepository.findAllEscenaActores();
    }

    async updateEscenaActor(id, data) {
        return await escenaActorRepository.updateEscenaActor(id, data);
    }

    async deleteEscenaActor(id) {
        return await escenaActorRepository.deleteEscenaActor(id);
    }
}

module.exports = EscenaActorService;