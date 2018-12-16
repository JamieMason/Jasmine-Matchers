const toBeNumber = require("./toBeNumber");

module.exports = (value, epsilon, actual) =>
  toBeNumber(actual) && actual >= value - epsilon && actual <= value + epsilon;
