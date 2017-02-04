// public
module.exports = {
  Array: is('Array'),
  Boolean: is('Boolean'),
  Date: is('Date'),
  Function: is('Function'),
  Object: is('Object'),
  String: is('String')
};

// implementation
function is(type) {
  return value => Object.prototype.toString.call(value) === `[object ${type}]`;
}
