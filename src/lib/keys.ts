import { reduce } from './reduce';

export const keys = (object) =>
  reduce(object, (array, value, key) => array.concat(key), []);
