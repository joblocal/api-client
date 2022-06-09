export default (language) => ({
  name: 'accept-language',
  req: (payload) => Object.assign(payload, {
    req: {
      ...payload.req,
      headers: {
        ...payload.req.headers,
        'Accept-Language': language,
      },
    },
  }),
});
