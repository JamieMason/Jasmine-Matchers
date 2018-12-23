import { toBeString } from './toBeString';

export const toBeHtmlString = (actual) =>
  toBeString(actual) && actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
