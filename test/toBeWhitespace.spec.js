describe('toBeWhitespace', () => {
  describe('when invoked', () => {
    describe('when subject IS a string containing only tabs, spaces, returns etc', () => {
      it('should confirm', () => {
        expect(' ').toBeWhitespace();
        expect('').toBeWhitespace();
      });
    });
    describe('when subject is NOT a string containing only tabs, spaces, returns etc', () => {
      it('should deny', () => {
        expect('has-no-whitespace').not.toBeWhitespace();
        expect('has whitespace').not.toBeWhitespace();
        expect(null).not.toBeWhitespace();
      });
    });
  });
});
