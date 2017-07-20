const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveStringSameLengthAs', () => {
  describeToHaveX('toHaveStringSameLengthAs', () => {
    describe('when the subject and comparison ARE both strings', () => {
      describe('when the subject IS the same length as the comparision string', () => {
        it('should confirm', () => {
          expect({
            memberName: 'ab'
          }).toHaveStringSameLengthAs('memberName', 'ab');
        });
      });
      describe('when the subject is NOT the same length as the comparision string', () => {
        it('should deny', () => {
          expect({
            memberName: 'abc'
          }).not.toHaveStringSameLengthAs('memberName', 'ab');
          expect({
            memberName: 'a'
          }).not.toHaveStringSameLengthAs('memberName', '');
          expect({
            memberName: ''
          }).not.toHaveStringSameLengthAs('memberName', 'a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', () => {
      it('should deny (we are asserting the relative lengths of two strings)', () => {
        let _undefined;
        expect({
          memberName: 'truthy'
        }).not.toHaveStringSameLengthAs('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringSameLengthAs('memberName', 'truthy');
        expect({
          memberName: ''
        }).not.toHaveStringSameLengthAs('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringSameLengthAs('memberName', '');
      });
    });
  });
});
