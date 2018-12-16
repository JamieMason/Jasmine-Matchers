import toBeNumber from './toBeNumber';
export default (actual) => toBeNumber(actual) && actual % 2 !== 0;
