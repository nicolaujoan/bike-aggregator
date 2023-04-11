function BikeRepository(model) {
    this.model = model;
}

BikeRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
};

BikeRepository.prototype.findAndCountAll = function (filter, range, sort) {
    return this.model._findAndCountAll(filter, range, sort);
}

BikeRepository.prototype.findOne = function (attributes, filters) {
    return this.model._findOne(attributes, filters);
}

BikeRepository.prototype.addOne = function (bike) {
    return this.model.addOne(bike);
}

BikeRepository.prototype.addMany = function (bikes) {
    return this.model.addMany(bikes);
}

BikeRepository.prototype.update = function (id, updatedBike) {
    return this.model._update(id, updatedBike);
}

BikeRepository.prototype.delete = function (filters) {
    return this.model._delete(filters);
}

module.exports = BikeRepository;