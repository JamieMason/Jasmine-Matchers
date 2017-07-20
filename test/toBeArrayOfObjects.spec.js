const describeToBeArrayOfX = require('./lib/describeToBeArrayOfX');

describe('toBeArrayOfObjects', () => {
  describeToBeArrayOfX('toBeArrayOfObjects', {
    type: 'Object',
    whenValid() {
      expect([{}, {}]).toBeArrayOfObjects();
    },
    whenInvalid() {
      expect([null]).not.toBeArrayOfObjects();
      expect(['Object']).not.toBeArrayOfObjects();
      expect(['[object Object]']).not.toBeArrayOfObjects();
    },
    whenMixed() {
      expect([null, {}]).not.toBeArrayOfObjects();
    }
  });
});
