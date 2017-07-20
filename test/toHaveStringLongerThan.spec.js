const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveStringLongerThan', () => {
  describeToHaveX('toHaveStringLongerThan', () => {
    describe('when the subject and comparison ARE both strings', () => {
      describe('when the subject IS longer than the comparision string', () => {
        it('should confirm', () => {
          expect({
            memberName: 'abc'
          }).toHaveStringLongerThan('memberName', 'ab');
          expect({
            memberName: 'a'
          }).toHaveStringLongerThan('memberName', '');
        });
      });
      describe('when the subject is NOT longer than the comparision string', () => {
        it('should deny', () => {
          expect({
            memberName: 'ab'
          }).not.toHaveStringLongerThan('memberName', 'abc');
          expect({
            memberName: ''
          }).not.toHaveStringLongerThan('memberName', 'a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', () => {
      it('should deny (we are asserting the relative lengths of two strings)', () => {
        let _undefined;
        expect({
          memberName: 'truthy'
        }).not.toHaveStringLongerThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringLongerThan('memberName', 'truthy');
        expect({
          memberName: ''
        }).not.toHaveStringLongerThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringLongerThan('memberName', '');
      });
    });
  });
});
