const express = require('express');
const router = express.Router();
const ActorController = require('../../Controllers/ActorController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/:id', ActorController.findActorById);
router.get('/', ActorController.findAllActores);
router.post('/', ActorController.createActor);
router.put('/:id', ActorController.updateActor);
router.delete('/:id', ActorController.deleteActor);

module.exports = router;
