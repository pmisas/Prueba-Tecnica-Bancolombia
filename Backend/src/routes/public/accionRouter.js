const express = require('express');
const router = express.Router();
const AccionController = require('../../Controllers/AccionController');
const authenticate = require('../../Config/middleware/autheticate');


router.get('/:id', AccionController.findAccionById);
router.get('/', AccionController.findAllAcciones);

module.exports = router;
