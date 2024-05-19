const express = require('express');
const guionRoutes = require('./guionRoutes');
const actorRoutes = require('./actorRouter');
const accionRoutes = require('./accionRouter');
const escenaRoutes = require('./escenaRouter');
const dialogoRoutes = require('./dialogoRouter');
const ubicacionRoutes = require('./ubicacionRouter');
const poseRoutes = require('./poseRouter');
const escenaActorRoute = require('./escenaActorRoute');
const { authenticateToken, authorizeRole } = require('../../Config/middleware/autheticate');

const router = express.Router();

router.use('/accion', authenticateToken, authorizeRole("guionista"), accionRoutes);
router.use('/guion', authenticateToken, authorizeRole("guionista"), guionRoutes);
router.use('/actor', authenticateToken, authorizeRole("guionista"), actorRoutes);
router.use('/escena', authenticateToken, authorizeRole("guionista"), escenaRoutes);
router.use('/ubicacion', authenticateToken, authorizeRole("guionista"), ubicacionRoutes);
router.use('/dialogo', authenticateToken, authorizeRole("guionista"), dialogoRoutes);
router.use('/pose', authenticateToken, authorizeRole("guionista"), poseRoutes);
router.use('/escena-actor', authenticateToken, authorizeRole("guionista"), escenaActorRoute);

module.exports = router;
