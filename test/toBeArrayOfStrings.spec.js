// modules
const describeToBeArrayOfX = require('./lib/describeToBeArrayOfX');

// spec
describe('toBeArrayOfStrings', () => {
  describeToBeArrayOfX('toBeArrayOfStrings', {
    type: 'String',
    whenValid() {
      expect(['truthy']).toBeArrayOfStrings();
      expect([new String('truthy')]).toBeArrayOfStrings();
      expect([new String('')]).toBeArrayOfStrings();
      expect(['', 'truthy']).toBeArrayOfStrings();
    },
    whenInvalid() {
      expect([null]).not.toBeArrayOfStrings();
    },
    whenMixed() {
      expect([null, '']).not.toBeArrayOfStrings();
    }
  });
});
