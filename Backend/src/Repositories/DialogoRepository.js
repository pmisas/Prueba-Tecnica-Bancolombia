const Dialogo = require('../db/Models/dialogoModel');

class DialogoRepository {
    async createDialogo(data) {
        return await Dialogo.create(data);
    }

    async findDialogoById(id) {
        return await Dialogo.findByPk(id);
    }

    async findAllDialogos() {
        return await Dialogo.findAll();
    }

    async updateDialogo(id, data) {
        const dialogo = await this.findDialogoById(id);
        if (!dialogo) throw new Error('Dialogo no encontrado');
        return await dialogo.update(data);
    }

    async deleteDialogo(id) {
        const dialogo = await this.findDialogoById(id);
        if (!dialogo) throw new Error('Dialogo no encontrado');
        return await dialogo.destroy();
    }
}

module.exports = DialogoRepository;
