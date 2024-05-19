const EscenaActor = require('../db/Models/escenaActorModel');

class EscenaActorRepository {
    
    async createEscenaActor(data) {
        return await EscenaActor.create(data);
    }

    async findEscenaActorById(id) {
        return await EscenaActor.findByPk(id);
    }

    async findEscenaActoresByEscenaId(escenaId) {
        return await EscenaActor.findAll({ where: { EscenaId: escenaId } });
    }

    async findEscenaActoresByActorId(actorId) {
        return await EscenaActor.findAll({ where: { ActorId: actorId } });
    }

    async findAllEscenaActores() {
        return await EscenaActor.findAll();
    }

    async updateEscenaActor(id, data) {
        const escenaActor = await this.findEscenaActorById(id);
        if (!escenaActor) throw new Error('EscenaActor no encontrado');
        return await escenaActor.update(data);
    }

    async deleteEscenaActor(id) {
        const escenaActor = await this.findEscenaActorById(id);
        if (!escenaActor) throw new Error('EscenaActor no encontrado');
        return await escenaActor.destroy();
    }

}

module.exports = EscenaActorRepository;
