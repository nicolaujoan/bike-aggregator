const ShopRepository = require('../repositories/shopRepository');
const Shop = require('../models/shop');

const shopRepository = new ShopRepository(Shop);

exports.getAllShopsAndCount = function (filter, range, sort) {
    const data = shopRepository.findAndCountAll(filter, range, sort);
    return data;
}

exports.getAllShops = function (attributes, filters) {
    const shops = shopRepository.findAll(attributes, filters);
    return shops;
}

exports.getShopById = function (id) {
    const shop = shopRepository.findOne(null, { id });
    return shop;
}

exports.updateShop = function (id, data) {
    const updatedRows = shopRepository.update(id, data);
    return updatedRows;
}

exports.deleteShop = function (id) {
    const deletedId = shopRepository.delete(id);
    return deletedId;
}

exports.getSingleShop = function (attributes, filters) {
    const shop = shopRepository.findOne(attributes, filters);
    return shop;
}

exports.addShop = function (shop) {
    return shopRepository.addOne(shop);
}

exports.addShops = function (shops) {
    return shopRepository.addMany(shops);
}

exports.deleteShops = function (shopFilters) {
    return shopRepository.delete(shopFilters);
}