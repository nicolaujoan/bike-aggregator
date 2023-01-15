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

    static async _findOne(attributes, filters) {
        const shop = await this.findOne({ attributes, where: filters });
        return shop ? shop.dataValues : null;
    }

    static async addOne(shop) {
        const createdShop = await this.create(shop);
        return createdShop.dataValues;
    }

    static async addMany(shops) {
        const createdShops = [];
        for (const shop of shops) {
            const createdShop = await this.create(shop);
            createdShops.push(createdShop.dataValues);
        }
        return createdShops;
    }

    static async _delete(filters) {
        const numDeletedShops = await this.destroy({ where: filters });
        return numDeletedShops;
    }
};

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