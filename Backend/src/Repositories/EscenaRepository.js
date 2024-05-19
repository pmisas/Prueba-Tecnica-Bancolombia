const Escena = require('../db/Models/escenaModel');

class EscenaRepository {
    async createEscena(data) {
        return await Escena.create(data);
    }

    async findEscenaById(id) {
        return await Escena.findByPk(id);
    }

    async findAllEscenas() {
        return await Escena.findAll();
    }

    async updateEscena(id, data) {
        const escena = await this.findEscenaById(id);
        if (!escena) throw new Error('Escena no encontrada');
        return await escena.update(data);
    }

    async deleteEscena(id) {
        const escena = await this.findEscenaById(id);
        if (!escena) throw new Error('Escena no encontrada');
        return await escena.destroy();
    }

}

module.exports = EscenaRepository;
