const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveDate', () => {
  let mockDate;
  beforeEach(() => {
    mockDate = {
      any: new Date(),
      early: new Date('2013-01-01T00:00:00.000Z'),
      late: new Date('2013-01-01T01:00:00.000Z')
    };
  });
  describeToHaveX('toHaveDate', () => {
    describe('when member is an instance of Date', () => {
      it('should confirm', () => {
        expect({
          memberName: mockDate.any
        }).toHaveDate('memberName');
      });
    });
    describe('when member is NOT an instance of Date', () => {
      it('should deny', () => {
        expect({
          memberName: null
        }).not.toHaveDate('memberName');
      });
    });
  });
});
