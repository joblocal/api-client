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

  test('to add Authorization header', async () => {
    const payload = await tokenAuthenticationMiddleware({ token: 'test' }).req(request);

    expect(payload).toEqual({
      req: {
        headers: {
          Authorization: 'Bearer test',
          TOKEN: 'Bearer test',
        },
      },
    });
  });

  test('to call token function if provided', async () => {
    const tokenFn = jest.fn(() => 'test');
    const payload = await tokenAuthenticationMiddleware({ token: tokenFn }).req(request);

    expect(tokenFn).toHaveBeenCalled();
    expect(payload).toEqual({
      req: {
        headers: {
          Authorization: 'Bearer test',
          TOKEN: 'Bearer test',
        },
      },
    });
  });

  test('to resolve token promise if provided', async () => {
    const tokenPromise = async () => 'test';
    const payload = await tokenAuthenticationMiddleware({ token: tokenPromise }).req(request);

    expect(payload).toEqual({
      req: {
        headers: {
          Authorization: 'Bearer test',
          TOKEN: 'Bearer test',
        },
      },
    });
  });

  test('to skip adding Authorization header', async () => {
    const payload = await tokenAuthenticationMiddleware().req(request);
    expect(payload).toEqual(request);
  });
});
