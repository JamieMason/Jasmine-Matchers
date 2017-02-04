// modules
const describeToHaveX = require('./describeToHaveX');

// public
module.exports = function describeToHaveArrayX(name, whenArray) {
  describeToHaveX(name, () => {
    describe('when member is an array', whenArray);
  });
};
