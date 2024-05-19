const express = require('express');
const router = express.Router();
const EscenaController = require('../../Controllers/EscenaController');
const authenticate = require('../../Config/middleware/autheticate');
const logOperation = require('../../Config/middleware/audit'); 


router.post('/',logOperation('Escena'), EscenaController.createEscena);
router.put('/:id',logOperation('Escena'), EscenaController.updateEscena);
router.delete('/:id',logOperation('Escena'), EscenaController.deleteEscena);

module.exports = router;
