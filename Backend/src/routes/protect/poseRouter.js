const express = require('express');
const router = express.Router();
const PoseActorController = require('../../Controllers/PoseController');
const authenticate = require('../../Config/middleware/autheticate');

const logOperation = require('../../Config/middleware/audit'); 


router.post('/', logOperation('Pose'), PoseActorController.createPoseActor);
router.put('/:id',logOperation('Pose'), PoseActorController.updatePoseActor);
router.delete('/:id', logOperation('Pose'), PoseActorController.deletePoseActor);

module.exports = router;
