const express = require('express');
const router = express.Router();
const UbicacionActorController = require('../../Controllers/UbicacionController');
const authenticate = require('../../Config/middleware/autheticate');

const logOperation = require('../../Config/middleware/audit'); 

router.use(logOperation('Ubicacion'));

router.post('/',logOperation('Ubicacion'), UbicacionActorController.createUbicacionActor);
router.put('/:id',logOperation('Ubicacion'), UbicacionActorController.updateUbicacionActor);
router.delete('/:id',logOperation('Ubicacion'), UbicacionActorController.deleteUbicacionActor);

module.exports = router;
