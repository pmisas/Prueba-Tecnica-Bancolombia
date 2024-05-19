const express = require('express');
const router = express.Router();
const EscenaActorController = require('../../Controllers/EscenaActorController');


router.post('/', EscenaActorController.createEscenaActor);

router.put('/:id', EscenaActorController.updateEscenaActor);
router.delete('/:id', EscenaActorController.deleteEscenaActor);

module.exports = router;