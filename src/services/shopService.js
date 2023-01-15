const ShopRepository = require('../repositories/shopRepository');
const Shop = require('../models/shop');

const shopRepository = new ShopRepository(Shop);

exports.getAllShops = function (attributes, filters) {
    const shops = shopRepository.findAll(attributes, filters);
    return shops;
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