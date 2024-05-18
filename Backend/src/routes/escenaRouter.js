const express = require('express');
const router = express.Router();
const EscenaController = require('../Controllers/EscenaController');


router.post('/', EscenaController.createEscena);
router.get('/', EscenaController.findAllEscenas);
router.get('/:id', EscenaController.findEscenaById);
router.put('/:id', EscenaController.updateEscena);
router.delete('/:id', EscenaController.deleteEscena);

module.exports = router;
