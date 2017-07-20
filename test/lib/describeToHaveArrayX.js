const describeToHaveX = require('./describeToHaveX');

module.exports = function describeToHaveArrayX(name, whenArray) {
  describeToHaveX(name, () => {
    describe('when member is an array', whenArray);
  });
};
