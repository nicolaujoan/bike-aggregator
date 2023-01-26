const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db/sequelize');
const BaseModel = require('./abstractions/baseModel');

class Shop extends BaseModel {};

Shop.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    location: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    phone_number: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    hours: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    services: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { sequelize, tableName: 'shops', timestamps: true, createdAt: false, updatedAt: false });

module.exports = Shop;