export type ToBeEmptyString = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeEmptyString: ToBeEmptyString;
    }
  }
}

export const toBeEmptyString: ToBeEmptyString = (actual) => actual === '';
