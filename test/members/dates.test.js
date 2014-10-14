describe('Date Members', function() {

  describeToHaveX({
    name: 'toHaveDate',
    whenPresent: function() {
      describe('when member is an instance of Date', function() {
        it('should confirm', function() {
          expect({
            memberName: new Date()
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

  describe('toHaveDateBefore', function() {
    describe('when invoked', function() {
      describe('when subject has a member which IS a date', function() {
        describe('and the supplied date is a date', function () {
          it('should confirm if the member is before the date', function () {
            expect({memberName: new Date('10-12-2000')}).toHaveDateBefore('memberName', new Date());
          });

          it('should deny if the member is not before the date', function () {
            expect({memberName: new Date('10-12-2100')}).not.toHaveDateBefore('memberName', new Date());
          });
        });

        describe('and the supplied date is not a date', function () {
          it('should deny', function () {
            expect({memberName: new Date('10-12-2000')}).not.toHaveDateBefore('memberName', null);
          });
        });
      });

      describe('when subject has a member which IS NOT a date', function() {
        it('should deny', function () {
          expect({memberName: '10-12-2000'}).not.toHaveDateBefore('memberName', new Date());
        });
      });

      describe('when subject does not have the supplied member', function() {
        it('should deny', function () {
          expect({memberName: '10-12-2000'}).not.toHaveDateBefore('notMemberName', new Date());
        });
      });
    });
  });

  describe('toHaveDateAfter', function() {
    describe('when invoked', function() {
      describe('when subject has a member which IS a date', function() {
        describe('and the supplied date is a date', function () {
          it('should confirm if the member is after the date', function () {
            expect({memberName: new Date('10-12-2100')}).toHaveDateAfter('memberName', new Date());
          });

          it('should deny if the member is not after the date', function () {
            expect({memberName: new Date('10-12-2000')}).not.toHaveDateAfter('memberName', new Date());
          });
        });

        describe('and the supplied date is not a date', function () {
          it('should deny', function () {
            expect({memberName: new Date('10-12-2000')}).not.toHaveDateAfter('memberName', null);
          });
        });
      });

      describe('when subject has a member which IS NOT a date', function() {
        it('should deny', function () {
          expect({memberName: '10-12-2000'}).not.toHaveDateAfter('memberName', new Date());
        });
      });

      describe('when subject does not have the supplied member', function() {
        it('should deny', function () {
          expect({memberName: '10-12-2000'}).not.toHaveDateAfter('notMemberName', new Date());
        });
      });
    });
  });

  describe('toHaveIso8601', function() {
    describe('when invoked', function() {
      describe('when subject has a member which IS a date conforming to the ISO 8601 standard', function() {
        it('should confirm', function () {
          expect({memberName: '2013-07-08T07:29:15.863Z'}).toHaveIso8601('memberName');
          expect({memberName:'2013-07-08T07:29:15.863'}).toHaveIso8601('memberName');
          expect({memberName:'2013-07-08T07:29:15'}).toHaveIso8601('memberName');
          expect({memberName:'2013-07-08T07:29'}).toHaveIso8601('memberName');
          expect({memberName:'2013-07-08'}).toHaveIso8601('memberName');
        });
      });

      describe('when subject has a member which IS NOT a date conforming to the ISO 8601 standard', function() {
        it('should deny', function () {
          expect({memberName: '2013/07/08'}).not.toHaveIso8601('memberName');
        });
      });

      describe('when subject does not have a member of the given name', function() {
        it('should deny', function () {
          expect({memberName: '2013-07-08T07:29:15.863Z'}).not.toHaveIso8601('notMemberName');
        });
      });
    });
  });

});
