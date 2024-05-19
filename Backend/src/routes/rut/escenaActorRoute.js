const express = require('express');
const router = express.Router();
const EscenaActorController = require('../../Controllers/EscenaActorController');


router.get('/', EscenaActorController.findAllEscenaActores);
router.get('/:id', EscenaActorController.findEscenaActorById);

// todos los actores en {:id} escena
router.get('/escena/:id', EscenaActorController.findEscenaActoresByEscenaId); 

// todas las escenas de {:id} autor
router.get('/actor/:id', EscenaActorController.findEscenaActoresByActorId);
router.post('/', EscenaActorController.createEscenaActor);
router.put('/:id', EscenaActorController.updateEscenaActor);
router.delete('/:id', EscenaActorController.deleteEscenaActor);

module.exports = router;