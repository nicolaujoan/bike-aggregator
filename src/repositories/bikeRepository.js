/**
 * This class works as a repository interface, this is in charge of the data access, so if
 * we change the orm, this would work as an abstraction to access to diferent DBs through
 * its models, so we have to ensure that the model implements the methods that this repo have
 */

// How to decouple from db, using custom methods in our repository and then do the custom ones
// in the model and do the details of implementation there, so our Repository is agnostic to
// the model we pass

// findByBrand quit it
// add and delete normal names, + add and delete many   

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