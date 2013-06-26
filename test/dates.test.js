describe('Dates', function () {

  describe('toBeDate', function () {
    it('asserts value is an instance of Date', function () {
      expect(new Date()).toBeDate();
      expect(null).not.toBeDate();
    });
  });

});
