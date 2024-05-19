const express = require('express');
const router = express.Router();
const UbicacionActorController = require('../../Controllers/UbicacionController');
const authenticate = require('../../Config/middleware/autheticate');

router.get('/:id', UbicacionActorController.findUbicacionActorById);
router.get('/', UbicacionActorController.findAllUbicacionActores);
router.post('/', UbicacionActorController.createUbicacionActor);
router.put('/:id', UbicacionActorController.updateUbicacionActor);
router.delete('/:id', UbicacionActorController.deleteUbicacionActor);

module.exports = router;
