module.exports = function callSpy(arg) {
  const spy = jasmine.createSpy();
  spy(arg);
  return spy;
};
