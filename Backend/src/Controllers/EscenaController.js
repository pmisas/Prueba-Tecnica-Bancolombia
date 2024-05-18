const EscenaService = require('../services/EscenaService');
const escenaService = new EscenaService();

class EscenaController {
    async createEscena(req, res) {
        try {
            const escena = await escenaService.createEscena(req.body);
            res.status(201).json(escena);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findEscenaById(req, res) {
        try {
            const escenaId = req.params.id;
            const escena = await escenaService.findEscenaById(escenaId);
            if (!escena) {
                res.status(404).json({ error: 'Escena no encontrada' });
            } else {
                res.status(200).json(escena);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllEscenas(req, res) {
        try {
            const escenas = await escenaService.findAllEscenas();
            res.status(200).json(escenas);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateEscena(req, res) {
        try {
            const escenaId = req.params.id;
            const escena = await escenaService.updateEscena(escenaId, req.body);
            res.status(200).json(escena);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteEscena(req, res) {
        try {
            const escenaId = req.params.id;
            await escenaService.deleteEscena(escenaId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new EscenaController();
