import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEvenNumber } from './toBeEvenNumber';

export type ToHaveEvenNumber = (
  key: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveEvenNumber: ToHaveEvenNumber;
    }
  }
}

export const toHaveEvenNumber: ToHaveEvenNumber = memberMatcherFor(
  toBeEvenNumber
);
