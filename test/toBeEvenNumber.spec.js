describe('toBeEvenNumber', () => {
  describe('when invoked', () => {
    describe('when subject IS an even number', () => {
      it('should confirm', () => {
        expect(2).toBeEvenNumber();
      });
    });
    describe('when subject is NOT an even number', () => {
      it('should deny', () => {
        expect(1).not.toBeEvenNumber();
        expect(NaN).not.toBeEvenNumber();
      });
    });
  });
});
