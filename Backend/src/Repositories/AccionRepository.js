const Accion = require('../db/Models/accionModel');

class AccionRepository {
    async createAccion(data) {
        return await Accion.create(data);
    }

    async findAccionById(id) {
        return await Accion.findByPk(id);
    }

    async findAllAcciones() {
        return await Accion.findAll();
    }

    async updateAccion(id, data) {
        const accion = await this.findAccionById(id);
        if (!accion) throw new Error('Accion no encontrada');
        return await accion.update(data);
    }

    async deleteAccion(id) {
        const accion = await this.findAccionById(id);
        if (!accion) throw new Error('Accion no encontrada');
        return await accion.destroy();
    }
}

module.exports = AccionRepository;
