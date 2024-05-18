const DialogoService = require('../services/DialogoService');
const dialogoService = new DialogoService();

class DialogoController {

    async createDialogo(req, res) {
        try {
            const dialogo = await dialogoService.createDialogo(req.body);
            res.status(201).json(dialogo);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findDialogoById(req, res) {
        try {
            const dialogoId = req.params.id;
            const dialogo = await dialogoService.findDialogoById(dialogoId);
            if (!dialogo) {
                res.status(404).json({ error: 'Dialogo no encontrado' });
            } else {
                res.status(200).json(dialogo);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllDialogos(req, res) {
        try {
            const dialogos = await dialogoService.findAllDialogos();
            res.status(200).json(dialogos);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateDialogo(req, res) {
        try {
            const dialogoId = req.params.id;
            const dialogo = await dialogoService.updateDialogo(dialogoId, req.body);
            res.status(200).json(dialogo);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteDialogo(req, res) {
        try {
            const dialogoId = req.params.id;
            await dialogoService.deleteDialogo(dialogoId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DialogoController();
