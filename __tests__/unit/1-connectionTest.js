const { connect } = require('../../config/db/sequelize');

test('the connection should return true', () => {
    return connect()
        .then(result => expect(result).toBeTruthy())
});

// PROMISE

/**
 * TWO THINGS TO BE NOTICED HERE:
 * 
 * 1- That return is crucial, otherwise your tests will get stuck
 * 2- No need to pass done to your test (only if we do not return)
 */