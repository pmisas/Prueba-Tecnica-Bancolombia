const EscenaActorService = require('../services/EscenaActorService');
const escenaActorService = new EscenaActorService();

class EscenaActorController {
    async createEscenaActor(req, res) {
        try {
            const escenaActor = await escenaActorService.createEscenaActor(req.body);
            res.status(201).json(escenaActor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findEscenaActorById(req, res) {
        try {
            const escenaActorId = req.params.id;
            const escenaActor = await escenaActorService.findEscenaActorById(escenaActorId);
            if (!escenaActor) {
                res.status(404).json({ error: 'EscenaActor no encontrado' });
            } else {
                res.status(200).json(escenaActor);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findEscenaActoresByEscenaId(req, res) {
        try {
            const escenaId = req.params.id;
            const escenaActores = await escenaActorService.findEscenaActoresByEscenaId(escenaId);
            res.status(200).json(escenaActores);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findEscenaActoresByActorId(req, res) {
        try {
            const actorId = req.params.id;
            const escenaActores = await escenaActorService.findEscenaActoresByActorId(actorId);
            res.status(200).json(escenaActores);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllEscenaActores(req, res) {
        try {
            const escenaActores = await escenaActorService.findAllEscenaActores();
            res.status(200).json(escenaActores);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateEscenaActor(req, res) {
        try {
            const escenaActorId = req.params.id;
            const updatedEscenaActor = await escenaActorService.updateEscenaActor(escenaActorId, req.body);
            res.status(200).json(updatedEscenaActor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteEscenaActor(req, res) {
        try {
            const escenaActorId = req.params.id;
            await escenaActorService.deleteEscenaActor(escenaActorId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new EscenaActorController();
