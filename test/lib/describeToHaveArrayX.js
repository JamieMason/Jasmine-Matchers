// modules
var describeToHaveX = require('./describeToHaveX');

// public
module.exports = function describeToHaveArrayX(name, whenArray) {
  describeToHaveX(name, function () {
    describe('when member is an array', whenArray);
  });
};
