const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEvenNumber', () => {
  describeToHaveX('toHaveEvenNumber', () => {
    describe('when subject IS an even number', () => {
      it('should confirm', () => {
        expect({
          memberName: 2
        }).toHaveEvenNumber('memberName');
      });
    });
    describe('when subject is NOT an even number', () => {
      it('should deny', () => {
        expect({
          memberName: 1
        }).not.toHaveEvenNumber('memberName');
        expect({
          memberName: NaN
        }).not.toHaveEvenNumber('memberName');
      });
    });
  });
});
