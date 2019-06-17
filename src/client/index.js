import DevourClient from 'devour-client';
import models from '../models';
import errorMiddleware from '../middlewares/errors';

export default function createClient(apiUrl = 'localhost') {
  const client = new DevourClient({
    apiUrl,
  });

  client.replaceMiddleware('errors', errorMiddleware);

  models.forEach(model => client.define(model.name, model.attributes));
  return client;
}
