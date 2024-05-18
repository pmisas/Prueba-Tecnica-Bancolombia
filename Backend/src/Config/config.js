const { Sequelize } = require('sequelize');
    const dbHost = process.env.DB_HOST;
    const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize("backenddb", "postgres", "Mimosa091", {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres',
});

module.exports = sequelize;
