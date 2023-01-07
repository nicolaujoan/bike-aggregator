const { DataTypes, Model } = require('sequelize');
const Bike = require('./bike');
const Shop = require('./shop');
const { sequelize } = require('../../config/db/sequelize');

class Availability extends Model {

    static async _findAll(attributes, filters) {
        try {
            const availability = await this.findAll({
                include: [{model: Shop}, {model: Bike}]
            });

            if (availability) {
                let availabilityDTO = availability.map(singleAvailability => {
                    let { Shop: shop, Bike: bike, in_stock } = singleAvailability;
                    return { shop: shop.dataValues, bike: bike.dataValues, in_stock };
                });
                return availabilityDTO;
            }
            return [];
        } catch (e) {
            console.log('exception: ', e.message);
        }

    }
};

Availability.init({
    bike_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },

    shop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },

    in_stock: {
        type: DataTypes.INTEGER
    }

}, { sequelize, tableName: 'availability', timestamps: true, createdAt: false, updatedAt: false });

// MAPPINGS
Availability.belongsTo(Shop, {foreignKey: 'shop_id'});  // foreign keys added on the source
Availability.belongsTo(Bike, {foreignKey: 'bike_id'});


module.exports = Availability;