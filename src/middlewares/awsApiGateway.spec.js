import awsApiGatewayMiddleware from './awsApiGateway';

describe('aws api gateway param flatten middleware', () => {
  const { paramsSerializer } = awsApiGatewayMiddleware.req({
    req: {},
  }).req;

  test('to set name correctly', () => {
    expect(awsApiGatewayMiddleware.name)
      .toBe('aws-api-gateway-param-flatten');
  });

  test('to sort params', () => {
    const params = { z: 1, a: 2 };

    expect(paramsSerializer(params))
      .toEqual('a=2&z=1');
  });

  test('to join param array', () => {
    const params = { foo: [1, 2, 3], bar: 4 };

    expect(paramsSerializer(params))
      .toEqual('bar=4&foo=1%2C2%2C3');
  });

  test('to join nested param array', () => {
    const params = { foo: { bar: [1, 2, 3] } };

    expect(paramsSerializer(params))
      .toEqual('foo.bar=1%2C2%2C3');
  });

  test('to join nested param value', () => {
    const params = { foo: { bar: 'test' } };

    expect(paramsSerializer(params))
      .toEqual('foo.bar=test');
  });
});
