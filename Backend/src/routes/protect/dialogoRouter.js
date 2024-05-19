const express = require('express');
const router = express.Router();
const DialogoController = require('../../Controllers/DialogoController');
const authenticate = require('../../Config/middleware/autheticate');

router.post('/', DialogoController.createDialogo);
router.put('/:id', DialogoController.updateDialogo);
router.delete('/:id', DialogoController.deleteDialogo);

module.exports = router;
