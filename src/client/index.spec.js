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

  test('to define ad-type model', () => {
    expect(apiClient.models['ad-type'].attributes)
      .toEqual(models.filter(model => model.name === 'ad-type')[0].attributes);
  });

  test('to define benefit model', () => {
    expect(apiClient.models.benefit.attributes)
      .toEqual(models.filter(model => model.name === 'benefit')[0].attributes);
  });

  test('to define subscription model', () => {
    expect(apiClient.models.subscription.attributes)
      .toEqual(models.filter(model => model.name === 'subscription')[0].attributes);
  });

  test('to define category model', () => {
    expect(apiClient.models.category.attributes)
      .toEqual(models.filter(model => model.name === 'category')[0].attributes);
  });

  test('to define company model', () => {
    expect(apiClient.models.company.attributes)
      .toEqual(models.filter(model => model.name === 'company')[0].attributes);
  });

  test('to define contact model', () => {
    expect(apiClient.models.contact.attributes)
      .toEqual(models.filter(model => model.name === 'contact')[0].attributes);
  });

  test('to define contract-type model', () => {
    expect(apiClient.models['contract-type'].attributes)
      .toEqual(models.filter(model => model.name === 'contract-type')[0].attributes);
  });

  test('to define domain model', () => {
    expect(apiClient.models.domain.attributes)
      .toEqual(models.filter(model => model.name === 'domain')[0].attributes);
  });

  test('to define industry model', () => {
    expect(apiClient.models.industry.attributes)
      .toEqual(models.filter(model => model.name === 'industry')[0].attributes);
  });

  test('to define job model', () => {
    expect(apiClient.models.job.attributes)
      .toEqual(models.filter(model => model.name === 'job')[0].attributes);
  });

  test('to define publication model', () => {
    expect(apiClient.models.publication.attributes)
      .toEqual(models.filter(model => model.name === 'publication')[0].attributes);
  });

  test('to define qualification model', () => {
    expect(apiClient.models.qualification.attributes)
      .toEqual(models.filter(model => model.name === 'qualification')[0].attributes);
  });

  test('to define subcategory model', () => {
    expect(apiClient.models.subcategory.attributes)
      .toEqual(models.filter(model => model.name === 'subcategory')[0].attributes);
  });

  test('to define video model', () => {
    expect(apiClient.models.video.attributes)
      .toEqual(models.filter(model => model.name === 'video')[0].attributes);
  });

  test('to define work-experience model', () => {
    expect(apiClient.models['work-experience'].attributes)
      .toEqual(models.filter(model => model.name === 'work-experience')[0].attributes);
  });
});
