import tokenAuthenticationMiddleware from './tokenAuthentication';

describe('token authentication middleware', () => {
  const request = {
    req: {
      headers: {},
    },
  };

  test('to set name correctly', () => {
    expect(tokenAuthenticationMiddleware().name).toBe('token-authentication');
  });

  test('to add Authorization header', () => {
    const payload = tokenAuthenticationMiddleware({ token: 'test' }).req(request);

    expect(payload).toEqual({
      req: {
        headers: {
          Authorization: 'Bearer test',
          TOKEN: 'Bearer test',
        },
      },
    });
  });

  test('to call token function if provided', () => {
    const tokenFn = jest.fn();
    tokenAuthenticationMiddleware({ token: tokenFn }).req(request);

    expect(tokenFn).toHaveBeenCalled();
  });

  test('to skip adding Authorization header', () => {
    const payload = tokenAuthenticationMiddleware().req(request);
    expect(payload).toEqual(request);
  });
});
