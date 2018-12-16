import toBeObject from './toBeObject';
import toBeShorterThan from './toBeShorterThan';

export default (key, other, actual) =>
  toBeObject(actual) && toBeShorterThan(other, actual[key]);
