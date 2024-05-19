const express = require('express');
const guionRoutes = require('./guionRoutes');
const accionRoutes = require('./accionRouter');
const actorRoutes = require('./actorRouter');
const escenaRoutes = require('./escenaRouter');
const dialogoRoutes = require('./dialogoRouter');
const ubicacionRoutes = require('./ubicacionRouter');
const poseRoutes = require('./poseRouter');
const escenaActorRoute = require('./escenaActorRoute');
const { authenticateToken } = require('../../Config/middleware/autheticate');

const router = express.Router();

router.use('/accion', authenticateToken, accionRoutes);
router.use('/guion', authenticateToken, guionRoutes);
router.use('/actor', authenticateToken, actorRoutes);
router.use('/escena', authenticateToken, escenaRoutes);
router.use('/ubicacion', authenticateToken, ubicacionRoutes);
router.use('/dialogo', authenticateToken, dialogoRoutes);
router.use('/pose', authenticateToken, poseRoutes);
router.use('/escena-actor', authenticateToken, escenaActorRoute);

module.exports = router;
