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

  });

  describe('toHaveDateAfter', function() {

  });

  describe('toHaveIso8601', function() {

  });

});
