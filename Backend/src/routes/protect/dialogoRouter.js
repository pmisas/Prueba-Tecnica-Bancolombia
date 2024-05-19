const express = require('express');
const router = express.Router();
const DialogoController = require('../../Controllers/DialogoController');
const authenticate = require('../../Config/middleware/autheticate');
const logOperation = require('../../Config/middleware/audit'); 


router.post('/',logOperation('Dialogo'), DialogoController.createDialogo);
router.put('/:id',logOperation('Dialogo'), DialogoController.updateDialogo);
router.delete('/:id',logOperation('Dialogo'), DialogoController.deleteDialogo);

module.exports = router;
