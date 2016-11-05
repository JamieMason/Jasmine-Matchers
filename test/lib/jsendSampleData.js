// Examples of valid and invalid jsend formats for use in tests:
// JSend spec: https://labs.omniti.com/labs/jsend

module.exports = {
  valid: {
    success: [
      {
        status: 'success',
        data: {hello: 'world'}
      },
      {
        status: 'success',
        data: ['Hello world']
      },
      {
        status: 'success',
        data: 'Hello world'
      },
      {
        status: 'success',
        data: 1234
      },
      {
        status: 'success',
        data: true
      },
      {
        status: 'success',
        data: null
      }
    ],
    fail: [
      {
        status: 'fail',
        data: {hello: 'world'}
      }
    ],
    error: [
      {
        status: 'error',
        message: 'Hello world'
      },
      {
        status: 'error',
        message: 'Hello world',
        code: 1234
      },
      {
        status: 'error',
        message: 'Hello world',
        data: {hello: 'world'}
      }
    ]
  },
  invalid: {
    success: [
      null,
      123,
      {},
      '[object Object]',
      {
        status: 'success'
      },
      {
        status: 'success',
        message: 'Hello world'
      },
      {
        status: 'success',
        message: function () {}
      },
      {
        status: 'success',
        data: function () {}
      }
    ],
    fail: [
      null,
      123,
      {},
      '[object Object]',
      {
        status: 'fail'
      },
      {
        status: 'fail',
        data: null
      },
      {
        status: 'fail',
        message: 'Hello world'
      },
      {
        status: 'fail',
        message: function () {}
      },
      {
        status: 'fail',
        data: ['Hello world']
      },
      {
        status: 'fail',
        data: 'Hello world'
      },
      {
        status: 'fail',
        data: 1234
      },
      {
        status: 'fail',
        data: true
      },
      {
        status: 'fail',
        data: function () {}
      }
    ],
    error: [
      null,
      123,
      {},
      '[object Object]',
      {
        status: 'error'
      },
      {
        status: 'error',
        message: null
      },
      {
        status: 'error',
        message: ''
      },
      {
        status: 'error',
        message: function () {}
      },
      {
        status: 'error',
        data: {hello: 'world'}
      },
      {
        status: 'error',
        data: function () {}
      }
    ]
  }
};
