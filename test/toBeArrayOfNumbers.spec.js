const describeToBeArrayOfX = require('./lib/describeToBeArrayOfX');

describe('toBeArrayOfNumbers', () => {
  describeToBeArrayOfX('toBeArrayOfNumbers', {
    type: 'Number',
    whenValid() {
      expect([1]).toBeArrayOfNumbers();
      expect([new Number(1)]).toBeArrayOfNumbers();
      expect([new Number(0)]).toBeArrayOfNumbers();
      expect([0, 1]).toBeArrayOfNumbers();
    },
    whenInvalid() {
      expect([null]).not.toBeArrayOfNumbers();
    },
    whenMixed() {
      expect([null, 0]).not.toBeArrayOfNumbers();
    }
  });
});
