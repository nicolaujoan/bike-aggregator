const { Sequelize } = require('sequelize');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});   

async function connect(){

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.log("######## env vars summary: ##########");
        console.log({db: process.env.DB, user: process.env.DB_USER, pass: process.env.DB_PASS, host: process.env.DB_HOST, dialect: process.env.DB_DIALECT})
        console.error('Unable to connect to the database:', error);
        return false;
    }
};

module.exports = {connect, sequelize};
