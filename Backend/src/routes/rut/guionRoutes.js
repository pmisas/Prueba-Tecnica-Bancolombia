const express = require('express');
const router = express.Router();
const GuionController = require('../../Controllers/GuionController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/:id', GuionController.findGuionById);
router.get('/', GuionController.findAllGuiones);
router.post('/', GuionController.createGuion);
router.put('/:id', GuionController.updateGuion);
router.delete('/:id', GuionController.deleteGuion);

module.exports = router;
