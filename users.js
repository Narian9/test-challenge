// Imports small array of users
// Pretend it's an API request
const users = require('./data');

// Fetches all users
const getUsers = () => {
    return users;
}

// Filters users by specific ID
const getUser = id => {
    return getUsers().find(user => user.id === id).username;
}


// test
// console.log(getUser(3));

module.exports = {getUsers , getUser};