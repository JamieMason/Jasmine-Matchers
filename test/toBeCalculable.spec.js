describe('toBeCalculable', () => {
  describe('when invoked', () => {
    describe('when subject CAN be coerced to be used in mathematical operations', () => {
      it('should confirm', () => {
        expect('1').toBeCalculable();
        expect('').toBeCalculable();
        expect(null).toBeCalculable();
      });
    });
    describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', () => {
      it('should deny', () => {
        expect({}).not.toBeCalculable();
        expect(NaN).not.toBeCalculable();
      });
    });
  });
});
