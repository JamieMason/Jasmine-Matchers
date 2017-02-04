// public
module.exports = actual => {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};
