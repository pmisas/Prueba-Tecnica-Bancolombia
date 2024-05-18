const ActorRepository = require('../repositories/ActorRepository');
const actorRepository = new ActorRepository();

class ActorService {

    async createActor(data) {
        return await actorRepository.createActor(data);
    }

    async findActorById(id) {
        return await actorRepository.findActorById(id);
    }

    async findAllActores() {
        return await actorRepository.findAllActores();
    }

    async updateActor(id, data) {
        return await actorRepository.updateActor(id, data);
    }

    async deleteActor(id) {
        return await actorRepository.deleteActor(id);
    }
}

module.exports = ActorService;
