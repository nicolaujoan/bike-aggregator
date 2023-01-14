function CategoryRepository(model) {
    this.model = model;
}

CategoryRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

CategoryRepository.prototype.findOneById = function (id) {
    return this.model.findOneById(id);
}

// Try to move this last two methods logic to the services

CategoryRepository.prototype.findAllSubcategories = function () {
    return this.model.findAllSubcategories();
}

CategoryRepository.prototype.findAllParentCategories = function () {
    return this.model.findAllParentCategories();
}

module.exports = CategoryRepository;