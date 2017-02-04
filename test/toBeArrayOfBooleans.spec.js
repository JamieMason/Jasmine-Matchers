// modules
const describeToBeArrayOfX = require('./lib/describeToBeArrayOfX');

// spec
describe('toBeArrayOfBooleans', () => {
  describeToBeArrayOfX('toBeArrayOfBooleans', {
    type: 'Boolean',
    whenValid() {
      expect([true]).toBeArrayOfBooleans();
      expect([new Boolean(true)]).toBeArrayOfBooleans();
      expect([new Boolean(false)]).toBeArrayOfBooleans();
      expect([false, true]).toBeArrayOfBooleans();
    },
    whenInvalid() {
      expect([null]).not.toBeArrayOfBooleans();
    },
    whenMixed() {
      expect([null, false]).not.toBeArrayOfBooleans();
      expect([null, true]).not.toBeArrayOfBooleans();
    }
  });
});
