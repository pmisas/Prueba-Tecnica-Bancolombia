const express = require('express');
const router = express.Router();
const GuionController = require('../Controllers/GuionController');

router.post('/', GuionController.createGuion);

router.get('/', GuionController.findAllGuiones);

module.exports = router;
