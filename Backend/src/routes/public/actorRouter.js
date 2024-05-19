const express = require('express');
const router = express.Router();
const ActorController = require('../../Controllers/ActorController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/:id', ActorController.findActorById);
router.get('/', ActorController.findAllActores);

module.exports = router;
