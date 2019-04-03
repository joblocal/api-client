import DevourClient from 'devour-client';
import models from '../models';

export default function createClient(apiUrl = 'localhost') {
  const client = new DevourClient({
    apiUrl,
  });

  models.forEach(model => client.define(model.name, model.attributes));
  return client;
}
