export default ({ token = null } = {}) => ({
  name: 'token-authentication',
  async req(payload) {
    if (token === null) return payload;

    const myToken = typeof token === 'function'
      ? await token()
      : token;
    const bearer = myToken ? `Bearer ${myToken}` : '';

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
