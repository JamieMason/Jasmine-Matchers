module.exports = [
  {
    name: 'any',
    category: 'jasmine',
    argNames: ['Constructor'],
    operatesOn: '',
    owner: 'jasmine'
  },
  {
    name: 'anything',
    category: 'jasmine',
    argNames: ['mixed'],
    operatesOn: '',
    owner: 'jasmine'
  },
  {
    name: 'arrayContaining',
    category: 'jasmine',
    argNames: ['mixed'],
    operatesOn: '',
    owner: 'jasmine'
  },
  {
    name: 'objectContaining',
    category: 'jasmine',
    argNames: ['mixed'],
    operatesOn: '',
    owner: 'jasmine'
  },
  {
    name: 'stringMatching',
    category: 'jasmine',
    argNames: ['pattern'],
    operatesOn: '',
    owner: 'jasmine'
  },
  {
    name: 'toBe',
    category: 'jasmine',
    argNames: ['instance'],
    operatesOn: 'instance',
    owner: 'expect'
  },
  {
    name: 'toBeCloseTo',
    category: 'jasmine',
    argNames: ['number', 'decimalPlaces'],
    operatesOn: 'number',
    owner: 'expect'
  },
  {
    name: 'toBeDefined',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toBeFalsy',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toBeGreaterThan',
    category: 'jasmine',
    argNames: ['number'],
    operatesOn: 'number',
    owner: 'expect'
  },
  {
    name: 'toBeLessThan',
    category: 'jasmine',
    argNames: ['number'],
    operatesOn: 'number',
    owner: 'expect'
  },
  {
    name: 'toBeNaN',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'number',
    owner: 'expect'
  },
  {
    name: 'toBeNull',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toBeTruthy',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toBeUndefined',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toContain',
    category: 'jasmine',
    argNames: ['member'],
    operatesOn: 'array',
    owner: 'expect'
  },
  {
    name: 'toEqual',
    category: 'jasmine',
    argNames: ['mixed'],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toHaveBeenCalled',
    category: 'jasmine',
    argNames: [],
    operatesOn: 'spy',
    owner: 'expect'
  },
  {
    name: 'toHaveBeenCalledTimes',
    category: 'jasmine',
    argNames: ['number'],
    operatesOn: 'spy',
    owner: 'expect'
  },
  {
    name: 'toHaveBeenCalledWith',
    category: 'jasmine',
    argNames: ['...arguments'],
    operatesOn: 'spy',
    owner: 'expect'
  },
  {
    name: 'toMatch',
    category: 'jasmine',
    argNames: ['pattern'],
    operatesOn: 'mixed',
    owner: 'expect'
  },
  {
    name: 'toThrow',
    category: 'jasmine',
    argNames: ['string'],
    operatesOn: 'fn',
    owner: 'expect'
  },
  {
    name: 'toThrowError',
    category: 'jasmine',
    argNames: ['string'],
    operatesOn: 'fn',
    owner: 'expect'
  }
];
