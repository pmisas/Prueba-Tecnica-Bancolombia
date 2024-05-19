const express = require('express');
const router = express.Router();
const AuthController = require('../../Controllers/AuthController');

router.post('/registro', AuthController.register);

router.post('/inicio-sesion', AuthController.login);

module.exports = router;
