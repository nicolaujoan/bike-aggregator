const ShopRepository = require('../repositories/shopRepository');
const Shop = require('../repositories/shopRepository');

const shopRepository = new ShopRepository(Shop);

exports.getAllShops = function (attributes, filters) {
    const shops = shopRepository.findAll();
    return shops;
}

exports.getServicesByShopName = function (name) {
    const shopServices = shopRepository.findServicesByShopName(name);
    return shopServices;
}