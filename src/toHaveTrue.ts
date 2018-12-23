import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeTrue } from './toBeTrue';

export type ToHaveTrue = (key: string, expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveTrue: ToHaveTrue;
    }
  }
}

export const toHaveTrue: ToHaveTrue = memberMatcherFor(toBeTrue);
