const express = require('express');
const router = express.Router();
const PoseActorController = require('../../Controllers/PoseController');
const authenticate = require('../../Config/middleware/autheticate');

router.get('/:id', PoseActorController.findPoseActorById);
router.get('/', PoseActorController.findAllPoseActores);
router.post('/', PoseActorController.createPoseActor);
router.put('/:id', PoseActorController.updatePoseActor);
router.delete('/:id', PoseActorController.deletePoseActor);

module.exports = router;
