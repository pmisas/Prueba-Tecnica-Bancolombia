const express = require('express');
const router = express.Router();
const GuionController = require('../../Controllers/GuionController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/:id', GuionController.findGuionById);
router.get('/', GuionController.findAllGuiones);

module.exports = router;
