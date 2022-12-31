/**
 * This class works as a repository interface, this is in charge of the data access, so if
 * we change the orm, this would work as an abstraction to access to diferent DBs through
 * its models, so we have to ensure that the model implements the methods that this repo have
 */

function BikeRepository(model) {   
    this.model = model;
}

BikeRepository.prototype.create = function() {
    this.model.create();  // create a single Bike
}

BikeRepository.prototype.findByModel = function() {
    return this.model.findByModel();
}

module.exports = BikeRepository;