const PoseActorService = require('../services/PoseService');
const poseActorService = new PoseActorService()

class PoseActorController {

    async createPoseActor(req, res) {
        try {
            const poseActor = await poseActorService.createPoseActor(req.body);
            res.status(201).json(poseActor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findPoseActorById(req, res) {
        try {
            const poseActorId = req.params.id;
            const poseActor = await poseActorService.findPoseActorById(poseActorId);
            if (!poseActor) {
                res.status(404).json({ error: 'PoseActor no encontrado' });
            } else {
                res.status(200).json(poseActor);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllPoseActores(req, res) {
        try {
            const poseActores = await poseActorService.findAllPoseActores();
            res.status(200).json(poseActores);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updatePoseActor(req, res) {
        try {
            const poseActorId = req.params.id;
            const poseActor = await poseActorService.updatePoseActor(poseActorId, req.body);
            res.status(200).json(poseActor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletePoseActor(req, res) {
        try {
            const poseActorId = req.params.id;
            await this.poseActorService.deletePoseActor(poseActorId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new PoseActorController();
