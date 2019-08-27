export default ({ token = null } = {}) => ({
  name: 'token-authentication',
  req: (payload) => {
    if (token === null) return payload;

    return Object.assign(payload, {
      req: {
        ...payload.req,
        headers: {
          ...payload.headers,
          Authorization: `Bearer ${token}`,
          TOKEN: `Bearer ${token}`,
        },
      },
    });
  },
});
