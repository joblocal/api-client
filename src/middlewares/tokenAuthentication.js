export default ({ token = null } = {}) => ({
  name: 'token-authentication',
  req: async (payload) => {
    if (token === null) return payload;

    const bearer = `Bearer ${(typeof token === 'function'
      ? await token()
      : token)}`;

    return Object.assign(payload, {
      req: {
        ...payload.req,
        headers: {
          ...payload.req.headers,
          Authorization: bearer,
          TOKEN: bearer,
        },
      },
    });
  },
});
