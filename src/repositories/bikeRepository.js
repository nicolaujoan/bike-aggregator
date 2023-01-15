function BikeRepository(model) {
    this.model = model;
}

BikeRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
};

BikeRepository.prototype.findOne = function (attributes, filters) {
    return this.model._findOne(attributes, filters);
}

BikeRepository.prototype.addOne = function (bike) {
    return this.model.addOne(bike);
}

BikeRepository.prototype.addMany = function (bikes) {
    return this.model.addMany(bikes);
}

BikeRepository.prototype.delete = function (filters) {
    return this.model._delete(filters);
}

module.exports = BikeRepository;