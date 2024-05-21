const express = require('express');
const router = express.Router();
const GuionController = require('../../Controllers/GuionController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/:id(\\d+)', GuionController.findGuionById);
router.get('/', GuionController.findAllGuiones);
router.get('/guionista', GuionController.findAllGuionesByGuionista);

module.exports = router;
