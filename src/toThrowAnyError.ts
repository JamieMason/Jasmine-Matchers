export const toThrowAnyError = (actual) => {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};
