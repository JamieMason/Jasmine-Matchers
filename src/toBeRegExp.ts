export type ToBeRegExp = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeRegExp: ToBeRegExp;
    }
  }
}

export const toBeRegExp: ToBeRegExp = (actual) => actual instanceof RegExp;
