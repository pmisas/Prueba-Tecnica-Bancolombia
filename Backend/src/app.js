const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/auth/userRoutes');
const protectRoutes = require('./routes/protect');
const publicRoutes = require('./routes/public');

const sequelize = require('./Config/config');
const { authenticateToken } = require('./Config/middleware/autheticate');
const logOperation = require('./Config/middleware/audit');

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
app.use('/protect', protectRoutes);
app.use('/', publicRoutes);

app.get('/', (req, res) => {
    res.send('Backend en NodeJS Express - Postgres');
});

app.listen(port, () => {
    console.log("Port ==>", port);
});
