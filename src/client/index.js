import DevourClient from 'devour-client';

import models from '../models';

import errorMiddleware from '../middlewares/errors';
import awsApiGatewayMiddleware from '../middlewares/awsApiGateway';
import putRequestMiddleware from '../middlewares/putRequest';
import tokenAuthenticationMiddleware from '../middlewares/tokenAuthentication';
import acceptLanguageMiddleware from '../middlewares/acceptLanguage';


export default function createClient({
  url = 'localhost',
  token = null,
  logger = true,
  language = 'de',
} = {}) {
  const client = new DevourClient({
    apiUrl: url,
    logger,
  });

  client.replaceMiddleware('errors', errorMiddleware);

  client.insertMiddlewareBefore('axios-request', awsApiGatewayMiddleware);
  client.insertMiddlewareBefore('axios-request', tokenAuthenticationMiddleware({ token }));
  client.insertMiddlewareBefore('axios-request', putRequestMiddleware);
  client.insertMiddlewareBefore('axios-request', acceptLanguageMiddleware(language));

  models.forEach((model) => client.define(
    model.name,
    model.attributes,
  ));

  return client;
}
