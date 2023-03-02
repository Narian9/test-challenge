// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly

// Verify any data of the resulting object you want
test('give id = 1 to get a username "hpLover4"', () => {
    expect(getUser(1)).toBe("hpLover4");
})

// READ documentation