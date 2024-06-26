const express = require('express');
const router = express.Router();
const DialogoController = require('../../Controllers/DialogoController');
const authenticate = require('../../Config/middleware/autheticate');

router.get('/:id', DialogoController.findDialogoById);
router.get('/', DialogoController.findAllDialogos);

module.exports = router;
