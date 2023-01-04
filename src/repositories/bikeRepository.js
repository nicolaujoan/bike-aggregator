/**
 * This class works as a repository interface, this is in charge of the data access, so if
 * we change the orm, this would work as an abstraction to access to diferent DBs through
 * its models, so we have to ensure that the model implements the methods that this repo have
 */

// How to decouple from db, using custom methods in our repository and then do the custom ones
// in the model and do the details of implementation there, so our Repository is agnostic to
// the model we pass

function BikeRepository(model) {
    this.model = model;
}

BikeRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
};

BikeRepository.prototype.findOne = function (attributes, filters) {
    return this.model._findOne(attributes, filters);
}

BikeRepository.prototype.findOneByBrand = function (brand) {
    return this.model.findOneByBrand(brand);
}

BikeRepository.prototype.findManyByBrand = function (brand) {
    return this.model.findManyByBrand(brand);
}

module.exports = BikeRepository;