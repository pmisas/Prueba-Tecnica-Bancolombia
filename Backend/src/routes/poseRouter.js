const express = require('express');
const router = express.Router();
const PoseActorController = require('../Controllers/PoseController');

router.post('/', PoseActorController.createPoseActor);
router.get('/:id', PoseActorController.findPoseActorById);
router.get('/', PoseActorController.findAllPoseActores);
router.put('/:id', PoseActorController.updatePoseActor);
router.delete('/:id', PoseActorController.deletePoseActor);

module.exports = router;
