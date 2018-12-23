export type ToBeCalculable = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeCalculable: ToBeCalculable;
    }
  }
}

export function toBeCalculable(actual) {
  return !isNaN(actual * 2);
}
