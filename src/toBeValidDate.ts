import { is } from './lib/is';
export const toBeValidDate = (actual) =>
  is.Date(actual) && !isNaN(actual.getTime());
