// public
module.exports = function callSpy(arg) {
  var spy = jasmine.createSpy();
  spy(arg);
  return spy;
};
