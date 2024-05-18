const PoseActorRepository = require('../repositories/PoseRepository');
const poseActorRepository = new PoseActorRepository()

class PoseActorService {

    async createPoseActor(data) {
        return await poseActorRepository.createPoseActor(data);
    }

    async findPoseActorById(id) {
        return await poseActorRepository.findPoseActorById(id);
    }

    async findAllPoseActores() {
        return await poseActorRepository.findAllPoseActores();
    }

    async updatePoseActor(id, data) {
        return await poseActorRepository.updatePoseActor(id, data);
    }

    async deletePoseActor(id) {
        return await poseActorRepository.deletePoseActor(id);
    }
}

module.exports = PoseActorService;
