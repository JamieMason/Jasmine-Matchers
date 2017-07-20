const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveStringShorterThan', () => {
  describeToHaveX('toHaveStringShorterThan', () => {
    describe('when the subject and comparison ARE both strings', () => {
      describe('when the subject IS shorter than the comparision string', () => {
        it('should confirm', () => {
          expect({
            memberName: 'ab'
          }).toHaveStringShorterThan('memberName', 'abc');
          expect({
            memberName: ''
          }).toHaveStringShorterThan('memberName', 'a');
        });
      });
      describe('when the subject is NOT shorter than the comparision string', () => {
        it('should deny', () => {
          expect({
            memberName: 'abc'
          }).not.toHaveStringShorterThan('memberName', 'ab');
          expect({
            memberName: 'a'
          }).not.toHaveStringShorterThan('memberName', '');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', () => {
      it('should deny (we are asserting the relative lengths of two strings)', () => {
        let _undefined;
        expect({
          memberName: 'truthy'
        }).not.toHaveStringShorterThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringShorterThan('memberName', 'truthy');
        expect({
          memberName: ''
        }).not.toHaveStringShorterThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringShorterThan('memberName', '');
      });
    });
  });
});
