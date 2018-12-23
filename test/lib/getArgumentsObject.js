module.exports = function getArgumentsObject() {
  return (function() {
    return arguments;
  })(1, 2, 3);
};
