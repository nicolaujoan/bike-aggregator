function ShopRepository(model) {
    this.model = model;
}

ShopRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

ShopRepository.prototype.findOne = function (attributes, filters) {
    return this.model._findOne(attributes, filters);
}

ShopRepository.prototype.addOne = function (shop) {
    return this.model.addOne(shop);
};

ShopRepository.prototype.addMany = function (shops) {
    return this.model.addMany(shops);
}

ShopRepository.prototype.delete = function (filters) {
    return this.model._delete(filters);
}


module.exports = ShopRepository;