const { DataTypes, Model } = require('sequelize');
const Bike = require('./bike');
const Shop = require('./shop');
const { sequelize } = require('../../config/db/sequelize');

class Availability extends Model {};

Availability.init({
    bike_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Bike,
            key: 'id'
        }
    },

    shop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Shop,
            key: 'id'
        }
    },

    in_stock: {
        type: DataTypes.INTEGER
    }

}, { sequelize, tableName: 'availability', timestamps: true, createdAt: false, updatedAt: false });

Availability.hasOne(Bike);
Availability.hasOne(Shop);