const DialogoRepository = require('../repositories/DialogoRepository');
const dialogoRepository = new DialogoRepository()

class DialogoService {

    async createDialogo(data) {
        return await dialogoRepository.createDialogo(data);
    }

    async findDialogoById(id) {
        return await dialogoRepository.findDialogoById(id);
    }

    async findAllDialogos() {
        return await dialogoRepository.findAllDialogos();
    }

    async updateDialogo(id, data) {
        return await dialogoRepository.updateDialogo(id, data);
    }

    async deleteDialogo(id) {
        return await dialogoRepository.deleteDialogo(id);
    }
}

module.exports = DialogoService;
