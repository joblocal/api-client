export default ({ token = null } = {}) => ({
  name: 'token-authentication',
  req: (payload) => {
    if (token === null) return payload;

    const bearer = `Bearer ${(typeof token === 'function'
      ? token()
      : token)}`;

    return Object.assign(payload, {
      req: {
        ...payload.req,
        headers: {
          ...payload.headers,
          Authorization: bearer,
          TOKEN: bearer,
        },
      },
    });
  },
});
