const express = require('express');
const router = express.Router();
const GuionController = require('../Controllers/GuionController');

router.post('/', GuionController.createGuion);
router.get('/:id', GuionController.findGuionById);
router.get('/', GuionController.findAllGuiones);
router.put('/:id', GuionController.updateGuion);
router.delete('/:id', GuionController.deleteGuion);

module.exports = router;
