const UbicacionActor = require('../db/Models/ubicacionModel');

class UbicacionActorRepository {
    async createUbicacionActor(data) {
        return await UbicacionActor.create(data);
    }

    async findUbicacionActorById(id) {
        return await UbicacionActor.findByPk(id);
    }

    async findAllUbicacionActores() {
        return await UbicacionActor.findAll();
    }

    async updateUbicacionActor(id, data) {
        const ubicacionActor = await findUbicacionActorById(id);
        if (!ubicacionActor) throw new Error('UbicacionActor no encontrado');
        return await ubicacionActor.update(data);
    }

    async deleteUbicacionActor(id) {
        const ubicacionActor = await findUbicacionActorById(id);
        if (!ubicacionActor) throw new Error('UbicacionActor no encontrado');
        return await ubicacionActor.destroy();
    }
}

module.exports = UbicacionActorRepository;
