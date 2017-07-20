const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveJsonString', () => {
  describeToHaveX('toHaveJsonString', () => {
    describe('when subject IS a string of parseable JSON', () => {
      it('should confirm', () => {
        expect({
          memberName: '{}'
        }).toHaveJsonString('memberName');
        expect({
          memberName: '[]'
        }).toHaveJsonString('memberName');
        expect({
          memberName: '[1]'
        }).toHaveJsonString('memberName');
      });
    });
    describe('when subject is NOT a string of parseable JSON', () => {
      it('should deny', () => {
        let _undefined;
        expect({
          memberName: '[1,]'
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: '<>'
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: null
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: ''
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: _undefined
        }).not.toHaveJsonString('memberName');
      });
    });
  });
});
