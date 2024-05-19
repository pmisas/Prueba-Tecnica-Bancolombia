const express = require('express');
const router = express.Router();
const AccionController = require('../../Controllers/AccionController');
const authenticate = require('../../Config/middleware/autheticate');
const logOperation = require('../../Config/middleware/audit'); 


router.post('/', logOperation('Accion'), AccionController.createAccion);
router.put('/:id', logOperation('Accion'), AccionController.updateAccion);
router.delete('/:id', logOperation('Accion'), AccionController.deleteAccion);

module.exports = router;
