const describeToHaveX = require('./lib/describeToHaveX');

describeToHaveX('toHaveDateBefore', () => {
  let mockDate;
  beforeEach(() => {
    mockDate = {
      any: new Date(),
      early: new Date('2013-01-01T00:00:00.000Z'),
      late: new Date('2013-01-01T01:00:00.000Z')
    };
  });
  describe('when member is an instance of Date', () => {
    describe('when date occurs before another', () => {
      it('should confirm', () => {
        expect({
          memberName: mockDate.early
        }).toHaveDateBefore('memberName', mockDate.late);
      });
    });
    describe('when date does NOT occur before another', () => {
      it('should deny', () => {
        expect({
          memberName: mockDate.late
        }).not.toHaveDateBefore('memberName', mockDate.early);
      });
    });
  });
  describe('when member is NOT an instance of Date', () => {
    it('should deny', () => {
      expect({
        memberName: null
      }).not.toHaveDateBefore('memberName', mockDate.any);
    });
  });
});
