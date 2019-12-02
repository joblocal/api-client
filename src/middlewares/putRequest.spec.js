import putRequestMiddleware from './putRequest';

describe('put request middleware', () => {
  test('to set name correctly', () => {
    expect(putRequestMiddleware.name).toBe('put-request-middleware');
  });

  test('to make put request', () => {
    const payload = {
      req: {
        method: 'PUT',
        data: {},
      },
      jsonApi: {
        serialize: {
          resource: jest.fn(),
        },
      },
    };
    const request = putRequestMiddleware.req(payload);

    expect(request.jsonApi.serialize.resource)
      .toHaveBeenCalled();
  });

  test('to make put request', () => {
    const payload = {
      req: {
        method: 'PUT',
        data: [],
      },
      jsonApi: {
        serialize: {
          collection: jest.fn(),
        },
      },
    };
    const request = putRequestMiddleware.req(payload);

    expect(request.jsonApi.serialize.collection)
      .toHaveBeenCalled();
  });
});
