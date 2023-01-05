function ShopRepository(model) {
    this.model = model;
}

ShopRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

ShopRepository.prototype.findServicesByShopName = function (shopName) {
    return this.model.findServicesByName(shopName);
}

module.exports = ShopRepository;