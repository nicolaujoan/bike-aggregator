const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../config/db/sequelize');
const Bike = require('./bike');
const Shop = require('./shop');
const { removeDuplicates } = require('../utils/availabilityUtils');

class Availability extends Model {

    static async _findAll(attributes, filters) {
        try {
            const availability = await this.findAll({
                include: [{ model: Shop }, { model: Bike }]
            });

            if (availability) {
                const availabilityDTO = availability.map(singleAvailability => {
                    const { Shop: shop, Bike: bike, in_stock } = singleAvailability;
                    return { shop: shop.dataValues, bike: bike.dataValues, in_stock };
                });
                return availabilityDTO;
            }
            return [];
        } catch (e) {
            console.log('exception: ', e.message);
        }
    }

    static async _findByPk(bikeId, shopId, attributes) {
        let availability = await this.findOne({
            where: {
                bike_id: bikeId,
                shop_id: shopId
            },
            attributes
        });
        return availability ? availability.dataValues : null;
    }

    static async findShopsByBike(bikeFilter, shopAttributes) {
        try {
            const shops = await this.findAll({

                include: [
                    { model: Shop, attributes: shopAttributes },
                    { model: Bike, where: bikeFilter, attributes: [] }
                ],
            });

            if (shops) {
                const foundShops = shops.map(availability => {
                    const { Shop: shop } = availability;
                    return shop.dataValues;
                }
                );
                const shopsWithoutDuplicates = removeDuplicates(foundShops);
                return shopsWithoutDuplicates;
            }
            return [];

        } catch (e) {
            console.log(e.message);
        }
    }

    static async findBikesByShop(shopFilter, bikeAttributes) {
        try {
            const bikes = await this.findAll({
                include: [
                    { model: Shop, where: shopFilter },
                    { model: Bike, attributes: bikeAttributes }
                ]
            });

            if (bikes) {
                const foundBikes = bikes.map(availability => {
                    const { Bike: bike } = availability;
                    return bike.dataValues;
                });
                return foundBikes;
            }
            return []

        } catch (e) {
            console.log(e.message);
        }
    }

    static async _update(updateAvailabilityDTO) {
        const newStock = updateAvailabilityDTO.rent
            ? updateAvailabilityDTO.stock - 1
            : updateAvailabilityDTO.stock + 1;

        const updateResult = await this.update({
            in_stock: newStock
        },
            {
                where: {
                    bike_id: updateAvailabilityDTO.bikeId,
                    shop_id: updateAvailabilityDTO.shopId
                }
            })
        return updateResult;
    }
};

// Model definition
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
Availability.belongsTo(Shop, { foreignKey: 'shop_id' });  // foreign keys added on the source
Availability.belongsTo(Bike, { foreignKey: 'bike_id' });


module.exports = Availability;