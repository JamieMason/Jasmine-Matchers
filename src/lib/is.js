// public
module.exports = function is(value, type) {
  return Object.prototype.toString.call(value) === '[object ' + type + ']';
};
