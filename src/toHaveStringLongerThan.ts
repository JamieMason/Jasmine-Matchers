import toBeLongerThan from './toBeLongerThan';
import toBeObject from './toBeObject';

export default (key, other, actual) =>
  toBeObject(actual) && toBeLongerThan(other, actual[key]);
