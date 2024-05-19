const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/rut/userRoutes');
const guionRoutes = require('./routes/rut/guionRoutes');
const actorRoutes = require('./routes/rut/actorRouter');
const escenaRoutes = require('./routes/rut/escenaRouter');
const dialogoRoutes = require('./routes/rut/dialogoRouter');
const ubicacionRoutes = require('./routes/rut/ubicacionRouter');
const poseRoutes = require('./routes/rut/poseRouter');
const escenaActorRoute = require('./routes/rut/escenaActorRoute');

const sequelize = require('./Config/config');
const { authenticateToken, authorizeRole } = require('./Config/middleware/autheticate');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database:', err));

app.use('/auth', authRoutes);
app.use('/guion', authenticateToken, guionRoutes);
app.use('/actor', authenticateToken, actorRoutes);
app.use('/escena', authenticateToken, escenaRoutes);
app.use('/ubicacion', authenticateToken, ubicacionRoutes);
app.use('/dialogo', authenticateToken, dialogoRoutes);
app.use('/pose', authenticateToken, poseRoutes);
app.use('/escena-actor', authenticateToken, escenaActorRoute);

app.get('/', (req, res) => {
    res.send('Backend en NodeJS Express - Postgres');
});

app.listen(port, () => {
    console.log("Port ==>", port);
});
