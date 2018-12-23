import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeDate } from './toBeDate';
export const toHaveDate = memberMatcherFor(toBeDate);
