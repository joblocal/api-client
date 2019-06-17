import errorMiddleware from './errors';

describe('error middleware', () => {
  test('to set name correctly', () => {
    expect(errorMiddleware.name).toBe('errors');
  });

  test('to return server error when no data', () => {
    const errors = errorMiddleware.error({
      response: {
        statusText: 'Bad Request',
      },
    });

    expect(errors).toEqual({
      data: {
        title: 'Bad Request',
      },
    });
  });

  test('to return full single error without source', () => {
    const errors = errorMiddleware.error({
      response: {
        data: {
          errors: [
            {
              id: '123',
              links: {
                about: 'https://joblocal.api-docs.io/',
              },
              status: '404',
              code: '123',
              title: 'Resource not found.',
              detail: 'The resource could not be found during proessing. Please create it first',
              meta: {
                foo: 'bar',
              },
            },
          ],
        },
      },
    });

    expect(errors).toEqual({
      0: {
        id: '123',
        links: {
          about: 'https://joblocal.api-docs.io/',
        },
        status: '404',
        code: '123',
        title: 'Resource not found.',
        detail: 'The resource could not be found during proessing. Please create it first',
        meta: {
          foo: 'bar',
        },
      },
    });
  });

  test('to return multiple errors without source', () => {
    const errors = errorMiddleware.error({
      response: {
        data: {
          errors: [
            {
              title: 'Resource not found on earth.',
            },
            {
              title: 'Resource not found on the moon.',
            },
          ],
        },
      },
    });

    expect(errors).toEqual({
      0: {
        title: 'Resource not found on earth.',
      },
      1: {
        title: 'Resource not found on the moon.',
      },
    });
  });

  test('to return error with source pointer', () => {
    const errors = errorMiddleware.error({
      response: {
        data: {
          errors: [
            {
              title: 'Age is not a number.',
              source: {
                pointer: '/data/attributes/age',
              },
            },
          ],
        },
      },
    });

    expect(errors).toEqual({
      age: {
        title: 'Age is not a number.',
      },
    });
  });

  test('to return error with source pointer', () => {
    const errors = errorMiddleware.error({
      response: {
        data: {
          errors: [
            {
              title: 'Page is not a positive number.',
              source: {
                parameter: 'page',
              },
            },
          ],
        },
      },
    });

    expect(errors).toEqual({
      page: {
        title: 'Page is not a positive number.',
      },
    });
  });

  test('to return error object correctly', () => {
    const errorPassthrough = new Error();
    const errors = errorMiddleware.error(errorPassthrough);

    expect(errors).toBe(errorPassthrough);
  });
});
