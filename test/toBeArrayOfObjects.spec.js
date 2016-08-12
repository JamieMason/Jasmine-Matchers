// modules
var describeToBeArrayOfX = require('./lib/describeToBeArrayOfX');

// spec
describe('toBeArrayOfObjects', function () {
  describeToBeArrayOfX('toBeArrayOfObjects', {
    type: 'Object',
    whenValid: function () {
      expect([{}, {}]).toBeArrayOfObjects();
    },
    whenInvalid: function () {
      expect([null]).not.toBeArrayOfObjects();
      expect(['Object']).not.toBeArrayOfObjects();
      expect(['[object Object]']).not.toBeArrayOfObjects();
    },
    whenMixed: function () {
      expect([null, {}]).not.toBeArrayOfObjects();
    }
  });
});
