const Actor = require('../db/Models/actorModel');

class ActorRepository {
    async createActor(data) {
        return await Actor.create(data);
    }

    async findActorById(id) {
        return await Actor.findByPk(id);
    }

    async findAllActores() {
        return await Actor.findAll();
    }

    async updateActor(id, data) {
        const actor = await this.findActorById(id);
        if (!actor) throw new Error('Actor no encontrado');
        return await actor.update(data);
    }

    async deleteActor(id) {
        const actor = await this.findActorById(id);
        if (!actor) throw new Error('Actor no encontrado');
        return await actor.destroy();
    }
}

module.exports = ActorRepository;
