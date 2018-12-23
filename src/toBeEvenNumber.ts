import { toBeNumber } from './toBeNumber';

export type ToBeEvenNumber = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeEvenNumber: ToBeEvenNumber;
    }
  }
}

export const toBeEvenNumber: ToBeEvenNumber = (actual) =>
  toBeNumber(actual) && actual % 2 === 0;
