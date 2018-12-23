import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfBooleans } from './toBeArrayOfBooleans';

export type ToHaveArrayOfBooleans = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveArrayOfBooleans: ToHaveArrayOfBooleans;
    }
  }
}

export const toHaveArrayOfBooleans: ToHaveArrayOfBooleans = memberMatcherFor(
  toBeArrayOfBooleans
);
