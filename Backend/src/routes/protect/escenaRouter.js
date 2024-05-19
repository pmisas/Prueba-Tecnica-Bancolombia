const express = require('express');
const router = express.Router();
const EscenaController = require('../../Controllers/EscenaController');
const authenticate = require('../../Config/middleware/autheticate');


router.post('/', EscenaController.createEscena);
router.put('/:id', EscenaController.updateEscena);
router.delete('/:id', EscenaController.deleteEscena);

module.exports = router;
