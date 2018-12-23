import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEvenNumber } from './toBeEvenNumber';
export const toHaveEvenNumber = memberMatcherFor(toBeEvenNumber);
