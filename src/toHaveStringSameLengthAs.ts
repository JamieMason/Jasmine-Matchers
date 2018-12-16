import toBeObject from './toBeObject';
import toBeSameLengthAs from './toBeSameLengthAs';

export default (key, other, actual) =>
  toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
