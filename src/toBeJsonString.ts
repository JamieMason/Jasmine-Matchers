export type ToBeJsonString = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeJsonString: ToBeJsonString;
    }
  }
}

export const toBeJsonString: ToBeJsonString = (actual) => {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};
