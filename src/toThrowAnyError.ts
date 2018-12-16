export default (actual) => {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};
