import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeHtmlString } from './toBeHtmlString';
export const toHaveHtmlString = memberMatcherFor(toBeHtmlString);
