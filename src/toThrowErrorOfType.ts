export type ToThrowErrorOfType = (
  type: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toThrowErrorOfType: ToThrowErrorOfType;
    }
  }
}

export const toThrowErrorOfType: ToThrowErrorOfType = (type, actual) => {
  try {
    actual();
    return false;
  } catch (err) {
    return err.name === type;
  }
};
