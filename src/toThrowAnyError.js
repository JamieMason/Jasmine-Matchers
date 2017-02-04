// public
module.exports = actual => {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};
