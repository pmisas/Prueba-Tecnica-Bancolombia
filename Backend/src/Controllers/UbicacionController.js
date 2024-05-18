const UbicacionActorService = require('../services/UbicacionService');
const ubicacionActorService = new UbicacionActorService();

class UbicacionActorController {

    async createUbicacionActor(req, res) {
        try {
            const ubicacionActor = await ubicacionActorService.createUbicacionActor(req.body);
            res.status(201).json(ubicacionActor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findUbicacionActorById(req, res) {
        try {
            const ubicacionActorId = req.params.id;
            const ubicacionActor = await ubicacionActorService.findUbicacionActorById(ubicacionActorId);
            if (!ubicacionActor) {
                res.status(404).json({ error: 'UbicacionActor no encontrado' });
            } else {
                res.status(200).json(ubicacionActor);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllUbicacionActores(req, res) {
        try {
            const ubicacionActores = await ubicacionActorService.findAllUbicacionActores();
            res.status(200).json(ubicacionActores);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateUbicacionActor(req, res) {
        try {
            const ubicacionActorId = req.params.id;
            const ubicacionActor = await ubicacionActorService.updateUbicacionActor(ubicacionActorId, req.body);
            res.status(200).json(ubicacionActor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUbicacionActor(req, res) {
        try {
            const ubicacionActorId = req.params.id;
            await ubicacionActorService.deleteUbicacionActor(ubicacionActorId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new UbicacionActorController();
