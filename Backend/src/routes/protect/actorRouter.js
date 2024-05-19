const express = require('express');
const router = express.Router();
const ActorController = require('../../Controllers/ActorController');
const authenticate = require('../../Config/middleware/autheticate');
const logOperation = require('../../Config/middleware/audit'); 


router.post('/',logOperation('Actor'), ActorController.createActor);
router.put('/:id',logOperation('Actor'), ActorController.updateActor);
router.delete('/:id',logOperation('Actor'), ActorController.deleteActor);

module.exports = router;
