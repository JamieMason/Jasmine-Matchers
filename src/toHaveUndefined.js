// modules
const toBeObject = require('./toBeObject');
const toHaveMember = require('./toHaveMember');

// public
module.exports = (key, actual) => toBeObject(actual) && toHaveMember(key, actual) && typeof actual[key] === 'undefined';
