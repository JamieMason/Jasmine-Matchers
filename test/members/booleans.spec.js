describe('Boolean Members', function() {

  describeToHaveBooleanX({
    name: 'toHaveBoolean',
    whenBoolean: function() {
      describe('when primitive', function() {
        it('should confirm', function() {
          expect({
            memberName: true
          }).toHaveBoolean('memberName');
          expect({
            memberName: false
          }).toHaveBoolean('memberName');
        });
      });
      describe('when Boolean object', function() {
        it('should confirm', function() {
          expect({
            memberName: new Boolean(true)
          }).toHaveBoolean('memberName');
          expect({
            memberName: new Boolean(false)
          }).toHaveBoolean('memberName');
        });
      });
    }
  });

  describeToHaveBooleanX({
    name: 'toHaveFalse',
    whenBoolean: function() {
      describe('when primitive', function() {
        describe('when true', function() {
          it('should deny', function() {
            expect({
              memberName: true
            }).not.toHaveFalse('memberName');
          });
        });
        describe('when false', function() {
          it('should confirm', function() {
            expect({
              memberName: false
            }).toHaveFalse('memberName');
          });
        });
      });
      describe('when Boolean object', function() {
        describe('when true', function() {
          it('should deny', function() {
            expect({
              memberName: new Boolean(true)
            }).not.toHaveFalse('memberName');
          });
        });
        describe('when false', function() {
          it('should confirm', function() {
            expect({
              memberName: new Boolean(false)
            }).toHaveFalse('memberName');
          });
        });
      });
    }
  });

  describeToHaveBooleanX({
    name: 'toHaveTrue',
    whenBoolean: function() {
      describe('when primitive', function() {
        describe('when true', function() {
          it('should confirm', function() {
            expect({
              memberName: true
            }).toHaveTrue('memberName');
          });
        });
        describe('when false', function() {
          it('should deny', function() {
            expect({
              memberName: false
            }).not.toHaveTrue('memberName');
          });
        });
      });
      describe('when Boolean object', function() {
        describe('when true', function() {
          it('should confirm', function() {
            expect({
              memberName: new Boolean(true)
            }).toHaveTrue('memberName');
          });
        });
        describe('when false', function() {
          it('should deny', function() {
            expect({
              memberName: new Boolean(false)
            }).not.toHaveTrue('memberName');
          });
        });
      });
    }
  });

});
