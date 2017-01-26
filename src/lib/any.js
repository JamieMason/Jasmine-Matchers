// public
module.exports = function any(array, truthTest) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (truthTest(array[i])) {
      return true;
    }
  }
  return false;
};
