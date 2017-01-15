// public
module.exports = function toBeValidDate(actual) {
  return Object.prototype.toString.call(actual) === '[object Date]' && !isNaN(actual.getTime());
};
