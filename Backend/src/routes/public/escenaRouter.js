const express = require('express');
const router = express.Router();
const EscenaController = require('../../Controllers/EscenaController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/', EscenaController.findAllEscenas);
router.get('/:id', EscenaController.findEscenaById);

module.exports = router;
