import DevourClient from 'devour-client';
import createClient from '.';
import models from '../models';

describe('api client', () => {
  test('to be a devour client', () => {
    expect(createClient()).toBeInstanceOf(DevourClient);
  });

  test('to set the api url correctly', () => {
    const hostname = 'localhost';
    const apiClient = createClient(hostname);
    expect(apiClient.apiUrl).toEqual(hostname);
  });
});

describe('api client definition', () => {
  const apiClient = createClient();

  test('to define domain model', () => {
    expect(apiClient.models.domain.attributes)
      .toEqual(models.filter(model => model.name === 'domain')[0].attributes);
  });

  test('to define job model', () => {
    expect(apiClient.models.job.attributes)
      .toEqual(models.filter(model => model.name === 'job')[0].attributes);
  });

  test('to define publication model', () => {
    expect(apiClient.models.publication.attributes)
      .toEqual(models.filter(model => model.name === 'publication')[0].attributes);
  });
});
