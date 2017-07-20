module.exports = {
  Array: is('Array'),
  Boolean: is('Boolean'),
  Date: is('Date'),
  False: isBooleanObject(false),
  Function: is('Function'),
  Object: is('Object'),
  String: is('String'),
  True: isBooleanObject(true)
};

function is(type) {
  return value => Object.prototype.toString.call(value) === `[object ${type}]`;
}

function isBooleanObject(trueOrFalse) {
  return value => module.exports.Boolean(value) && value.valueOf() === trueOrFalse;
}
