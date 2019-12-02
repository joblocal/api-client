export default {
  name: 'put-request-middleware',
  req: (payload) => {
    const { jsonApi } = payload;
    const internalPayload = payload;

    if (payload.req.method === 'PUT') {
      if (payload.req.data.constructor === Array) {
        internalPayload.req.data = {
          data: jsonApi.serialize.collection.call(jsonApi, payload.req.model, payload.req.data),
          meta: payload.req.meta,
        };
      } else {
        internalPayload.req.data = {
          data: jsonApi.serialize.resource.call(jsonApi, payload.req.model, payload.req.data),
          meta: payload.req.meta,
        };
      }
    }
    return internalPayload;
  },
};
