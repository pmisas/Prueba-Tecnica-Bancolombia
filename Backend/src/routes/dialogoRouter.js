const express = require('express');
const router = express.Router();
const DialogoController = require('../Controllers/DialogoController');

router.post('/', DialogoController.createDialogo);
router.get('/:id', DialogoController.findDialogoById);
router.get('/', DialogoController.findAllDialogos);
router.put('/:id', DialogoController.updateDialogo);
router.delete('/:id', DialogoController.deleteDialogo);

module.exports = router;
