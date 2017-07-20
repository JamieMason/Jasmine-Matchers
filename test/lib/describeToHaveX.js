module.exports = function describeToHaveX(name, whenPresent) {
  describe('when invoked', () => {
    describe('when subject is not an object', () => {
      it('should deny', () => {
        expect(0).not[name]('memberName');
        expect(null).not[name]('memberName');
        expect(true).not[name]('memberName');
        expect(false).not[name]('memberName');
        expect('').not[name]('memberName');
      });
    });
    describe('when subject is an object', () => {
      describe('when member is not present', () => {
        it('should deny', () => {
          expect({}).not[name]('memberName');
        });
      });
      describe('when member is present', () => {
        whenPresent();
      });
    });
  });
};
