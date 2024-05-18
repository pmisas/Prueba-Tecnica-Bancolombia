const ActorService = require('../services/ActorService');
const actorService = new ActorService();

class ActorController {

    async createActor(req, res) {
        try {
            const actor = await actorService.createActor(req.body);
            res.status(201).json(actor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findActorById(req, res) {
        try {
            const actorId = req.params.id;
            const actor = await actorService.findActorById(actorId);
            if (!actor) {
                res.status(404).json({ error: 'Actor no encontrado' });
            } else {
                res.status(200).json(actor);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllActores(req, res) {
        try {
            const actores = await actorService.findAllActores();
            res.status(200).json(actores);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateActor(req, res) {
        try {
            const actorId = req.params.id;
            const actor = await actorService.updateActor(actorId, req.body);
            res.status(200).json(actor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteActor(req, res) {
        try {
            const actorId = req.params.id;
            await actorService.deleteActor(actorId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ActorController();
