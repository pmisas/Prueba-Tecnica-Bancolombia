const PoseActor = require('../db/Models/poseModel');

class PoseActorRepository {
    async createPoseActor(data) {
        return await PoseActor.create(data);
    }

    async findPoseActorById(id) {
        return await PoseActor.findByPk(id);
    }

    async findAllPoseActores() {
        return await PoseActor.findAll();
    }

    async updatePoseActor(id, data) {
        const poseActor = await findPoseActorById(id);
        if (!poseActor) throw new Error('PoseActor no encontrado');
        return await poseActor.update(data);
    }

    async deletePoseActor(id) {
        const poseActor = await findPoseActorById(id);
        if (!poseActor) throw new Error('PoseActor no encontrado');
        return await poseActor.destroy();
    }
}

module.exports = PoseActorRepository;
