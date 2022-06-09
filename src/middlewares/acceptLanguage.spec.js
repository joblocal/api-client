import acceptLanguageMiddleware from './acceptLanguage';

describe('accept language middleware', () => {
  const request = {
    req: {
      headers: {},
    },
  };

  test('to set name correctly', () => {
    expect(acceptLanguageMiddleware().name).toBe('accept-language');
  });

  test('to add Authorization header', async () => {
    const payload = await acceptLanguageMiddleware('en').req(request);

    expect(payload).toEqual({
      req: {
        headers: {
          'Accept-Language': 'en',
        },
      },
    });
  });
});
