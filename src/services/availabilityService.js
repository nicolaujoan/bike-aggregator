const AvailabilityRepository = require('../repositories/availabilityRepository');
const Availability = require('../models/availability');

const availabilityRepository = new AvailabilityRepository(Availability);

exports.findAvailability = function (attributes, filters) {
    const availability = availabilityRepository.findAll(attributes, filters);
    return availability;
}

exports.findBikesByShop = function (shopFilter, bikeAttributes) {
    const bikes = availabilityRepository.findBikesByShop(shopFilter, bikeAttributes);
    return bikes;
}

exports.findShopsByBike = function (bikeFilter, shopAttributes) {
    const shops = availabilityRepository.findShopsByBike(bikeFilter, shopAttributes);
    return shops;
}

exports.rentBike = async function (bikeId, shopId) {
    const availability = await availabilityRepository.findByPk(bikeId, shopId);
    if (availability.in_stock) {

        const updateAvailabilityDTO = {
            rent: true,
            stock: availability.in_stock,
            bikeId,
            shopId
        }

        await availabilityRepository.update(updateAvailabilityDTO);
        return { rented: true, stock: availability.in_stock - 1 }
    } else {
        return { rented: false, stock: availability.in_stock }
    }
}

exports.returnBike = async function (bikeId, shopId) {
    const availability = await availabilityRepository.findByPk(bikeId, shopId);

    if (availability) {

        const updateAvailabilityDTO = {
            return: true,
            stock: availability.in_stock,
            bikeId,
            shopId
        }

        await availabilityRepository.update(updateAvailabilityDTO);
        return { returned: true, stock: availability.in_stock + 1 }
    } else {
        return { returned: false, stock: availability.in_stock }
    }
}   