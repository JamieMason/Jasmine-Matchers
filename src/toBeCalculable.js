// public
module.exports = toBeCalculable;

// Assert subject can be used in Mathemetic calculations despite not being a
// Number, for example `"1" * "2" === 2` whereas `"wut?" * 2 === NaN`.
function toBeCalculable(actual) {
  return !isNaN(actual * 2);
}
