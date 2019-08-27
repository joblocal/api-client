import DevourClient from 'devour-client';
import createClient from '.';

import models from '../models';

describe('api client', () => {
  test('to be a devour client', () => {
    expect(createClient()).toBeInstanceOf(DevourClient);
  });

  test('to set the api url correctly', () => {
    const url = 'localhost';
    const apiClient = createClient({ url });
    expect(apiClient.apiUrl).toEqual(url);
  });
});

describe('middleware registration', () => {
  const client = createClient();

  test('to register error middleware', () => {
    const middleware = client.middleware
      .find((mw) => mw.name === 'errors');

    expect(middleware).not.toBeNull();
  });

  test('to register auth middleware', () => {
    const middleware = client.middleware
      .find((mw) => mw.name === 'token-authentication');

    expect(middleware).not.toBeNull();
  });

  test('to register api gateway middleware', () => {
    const middleware = client.middleware
      .find((mw) => mw.name === 'aws-api-gateway-param-flatten');

    expect(middleware).not.toBeNull();
  });
});

describe('api client definition', () => {
  const apiClient = createClient();

  test('to define domain model', () => {
    expect(apiClient.models.domain.attributes)
      .toEqual(models.filter((model) => model.name === 'domain')[0].attributes);
  });

  test('to define job model', () => {
    expect(apiClient.models.job.attributes)
      .toEqual(models.filter((model) => model.name === 'job')[0].attributes);
  });

  test('to define publication model', () => {
    expect(apiClient.models.publication.attributes)
      .toEqual(models.filter((model) => model.name === 'publication')[0].attributes);
  });

  test('to define ad-type model', () => {
    expect(apiClient.models['ad-type'].attributes)
      .toEqual(models.filter((model) => model.name === 'ad-type')[0].attributes);
  });

  test('to define category model', () => {
    expect(apiClient.models.category.attributes)
      .toEqual(models.filter((model) => model.name === 'category')[0].attributes);
  });

  test('to define subcategory model', () => {
    expect(apiClient.models.subcategory.attributes)
      .toEqual(models.filter((model) => model.name === 'subcategory')[0].attributes);
  });

  test('to define user model', () => {
    expect(
      apiClient
        .models
        .user
        .attributes,
    ).toEqual(
      models.filter((model) => model.name === 'user')[0].attributes,
    );
  });

  test('to define company model', () => {
    expect(
      apiClient
        .models
        .company
        .attributes,
    ).toEqual(
      models.filter((model) => model.name === 'company')[0].attributes,
    );
  });
});
