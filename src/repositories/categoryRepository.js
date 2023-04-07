function CategoryRepository(model) {
    this.model = model;
}

CategoryRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

CategoryRepository.prototype.findAndCountAll = function (filter, range, sort) {
    return this.model._findAndCountAll(filter, range, sort);
}

CategoryRepository.prototype.findOneById = function (id) {
    return this.model.findOneById(id);
}

CategoryRepository.prototype.findAllSubcategories = function () {
    return this.model.findAllSubcategories();
}

CategoryRepository.prototype.findAllParentCategories = function () {
    return this.model.findAllParentCategories();
}

CategoryRepository.prototype.addOne = function (category) {
    return this.model.addOne(category);
}

CategoryRepository.prototype.addMany = function (categories) {
    return this.model.addMany(categories);
}

module.exports = CategoryRepository;