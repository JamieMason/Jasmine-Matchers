describe('Date Members', function() {

  var mockDate;

  beforeEach(function() {
    mockDate = {
      any: new Date(),
      early: new Date('2013-01-01T00:00:00.000Z'),
      late: new Date('2013-01-01T01:00:00.000Z')
    };
  });

  describeToHaveX({
    name: 'toHaveDate',
    whenPresent: function() {
      describe('when member is an instance of Date', function() {
        it('should confirm', function() {
          expect({
            memberName: mockDate.any
          }).toHaveDate('memberName');
        });
      });
      describe('when member is NOT an instance of Date', function() {
        it('should deny', function() {
          expect({
            memberName: null
          }).not.toHaveDate('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveDateBefore',
    whenPresent: function() {
      describe('when member is an instance of Date', function() {
        describe('when date occurs before another', function() {
          it('should confirm', function() {
            expect({
              memberName: mockDate.early
            }).toHaveDateBefore('memberName', mockDate.late);
          });
        });
        describe('when date does NOT occur before another', function() {
          it('should deny', function() {
            expect({
              memberName: mockDate.late
            }).not.toHaveDateBefore('memberName', mockDate.early);
          });
        });
      });
      describe('when member is NOT an instance of Date', function() {
        it('should deny', function() {
          expect({
            memberName: null
          }).not.toHaveDateBefore('memberName', mockDate.any);
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveDateAfter',
    whenPresent: function() {
      describe('when member is an instance of Date', function() {
        describe('when date occurs before another', function() {
          it('should confirm', function() {
            expect({
              memberName: mockDate.late
            }).toHaveDateAfter('memberName', mockDate.early);
          });
        });
        describe('when date does NOT occur before another', function() {
          it('should deny', function() {
            expect({
              memberName: mockDate.early
            }).not.toHaveDateAfter('memberName', mockDate.late);
          });
        });
      });
      describe('when member is NOT an instance of Date', function() {
        it('should deny', function() {
          expect({
            memberName: null
          }).not.toHaveDateAfter('memberName', mockDate.any);
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveIso8601',
    whenPresent: function() {
      describe('when member is a Date String conforming to the ISO 8601 standard',
        function() {
          describe('when specified date is valid', function() {
            it('should confirm', function() {
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
          describe('when specified date is NOT valid', function() {
            it('should deny', function() {
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
        function() {
          it('should deny', function() {
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
    }
  });

});
