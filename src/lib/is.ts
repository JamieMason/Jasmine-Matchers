const createIs = (type) => (value) =>
  Object.prototype.toString.call(value) === `[object ${type}]`;

const createIsBooleanObject = (trueOrFalse) => (value) =>
  is.Boolean(value) && value.valueOf() === trueOrFalse;

export const is = {
  Array: createIs('Array'),
  Boolean: createIs('Boolean'),
  Date: createIs('Date'),
  False: createIsBooleanObject(false),
  Function: createIs('Function'),
  Object: createIs('Object'),
  String: createIs('String'),
  True: createIsBooleanObject(true)
};
