describe('Protractor Example', function () {
  describe('Protractor', function () {
    it('should be configured correctly', function () {
      browser.get('http://juliemr.github.io/protractor-demo/');
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  });
  describe('Jasmine Matchers', function () {
    it('should be configured correctly', function () {
      expect(function () {}).toBeFunction();
      expect(666).toBeNumber();
    });
  });
});
