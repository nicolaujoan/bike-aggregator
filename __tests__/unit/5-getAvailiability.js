const Availability = require('../../src/models/availability');
const AvailabilityRepository = require('../../src/repositories/availabilityRepository');
const util = require('util');

describe('get some availability', () => {

    let Repo;

    beforeAll(() => {
        Repo = new AvailabilityRepository(Availability);
    })

    test('dummy test', async () => {
        const availability = await Repo.findAll();
        console.log(util.inspect(availability, {showHidden: false, depth: null, colors: true}));
        expect(availability.length).toBe(10);
    });
});