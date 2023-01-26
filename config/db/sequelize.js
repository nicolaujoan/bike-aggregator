const { Sequelize } = require('sequelize');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        multipleStatements: true
    }
});

async function connect() {

    try {
        await sequelize.authenticate();
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = { connect, sequelize };
