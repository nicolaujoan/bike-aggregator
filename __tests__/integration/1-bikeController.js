const app = require('../../app');
const request = require('supertest');

describe('Test the bike controller', () => {

    test('This should return all bikes in the system', async () => {
        const response = await request(app).get('/bikes');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(10);
    });


    test('This should return only the bikes from Specialized brand with the specified attributes', async () => {
        const response = await request(app)
            .get('/bikes/?attributes=id&attributes=brand&attributes=model&brand=Specialized');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(3);

        const expectedJSON = [
            { id: 3, brand: 'Specialized', model: 'Sirrus' },
            { id: 8, brand: 'Specialized', model: 'Stumpjumper' },
            { id: 9, brand: 'Specialized', model: 'Enduro' }
        ];

        expect(response.body).toStrictEqual(expectedJSON);
    });
});

