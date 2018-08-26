const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveIso8601', () => {
  describeToHaveX('toHaveIso8601', () => {
    describe('when member is a Date String conforming to the ISO 8601 standard',
      () => {
        describe('when specified date is valid', () => {
          it('should confirm', () => {
            expect({
              memberName: '2013-07-08T07:29:15.863Z'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08T07:29:15.863'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08T07:29:15'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08T07:29'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08'
            }).toHaveIso8601('memberName');
          });
        });
        describe('when specified date is NOT valid', () => {
          it('should deny', () => {
            expect({
              memberName: '2013-99-12T00:00:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-12-99T00:00:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-01-01T99:00:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-01-01T99:99:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-01-01T00:00:99.000Z'
            }).not.toHaveIso8601('memberName');
          });
        });
      });
    describe('when member is a String NOT conforming to the ISO 8601 standard',
      () => {
        it('should deny', () => {
          expect({
            memberName: '2013-07-08T07:29:15.'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07:29:'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07:2'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07:'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-0'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-0'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '201'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '20'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: ''
          }).not.toHaveIso8601('memberName');
        });
      });
  });
});
