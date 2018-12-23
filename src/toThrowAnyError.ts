export type ToThrowAnyError = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toThrowAnyError: ToThrowAnyError;
    }
  }
}

export const toThrowAnyError: ToThrowAnyError = (actual) => {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};
