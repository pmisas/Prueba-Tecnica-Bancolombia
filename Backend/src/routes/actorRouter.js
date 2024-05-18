const express = require('express');
const router = express.Router();
const ActorController = require('../Controllers/ActorController');

router.post('/', ActorController.createActor);
router.get('/:id', ActorController.findActorById);
router.get('/', ActorController.findAllActores);
router.put('/:id', ActorController.updateActor);
router.delete('/:id', ActorController.deleteActor);

module.exports = router;
