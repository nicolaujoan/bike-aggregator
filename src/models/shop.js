const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db/sequelize');

class Shop extends Model {

    static async _findAll(attributes, filters) {
        const shops = await this.findAll({ attributes, where: filters });
        if (shops) {
            return shops.map(shop => shop.dataValues);
        }
        return [];
    }

    static async findServicesByName(name) {
        const shop = await this.findOne({ attributes: ['id', 'name', 'services'], where: {name} });
        return shop ? shop.dataValues : null;
    }
};

Shop.init({
    id: {
        type: DataTypes.INTEGER,
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