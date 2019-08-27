import DevourClient from 'devour-client';

import models from '../models';

import errorMiddleware from '../middlewares/errors';
import awsApiGatewayMiddleware from '../middlewares/awsApiGateway';
import tokenAuthenticationMiddleware from '../middlewares/tokenAuthentication';


export default function createClient({
  url = 'localhost',
  token = null,
} = {}) {
  const client = new DevourClient({
    apiUrl: url,
  });

  client.replaceMiddleware('errors', errorMiddleware);

  client.insertMiddlewareBefore('axios-request', awsApiGatewayMiddleware);
  client.insertMiddlewareBefore('axios-request', tokenAuthenticationMiddleware({ token }));

  models.forEach((model) => client.define(
    model.name,
    model.attributes,
  ));

  return client;
}
