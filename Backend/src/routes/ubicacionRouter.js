const express = require('express');
const router = express.Router();
const UbicacionActorController = require('../Controllers/UbicacionController');

router.post('/', UbicacionActorController.createUbicacionActor);
router.get('/:id', UbicacionActorController.findUbicacionActorById);
router.get('/', UbicacionActorController.findAllUbicacionActores);
router.put('/:id', UbicacionActorController.updateUbicacionActor);
router.delete('/:id', UbicacionActorController.deleteUbicacionActor);

module.exports = router;
