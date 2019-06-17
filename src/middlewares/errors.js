const errorKey = (index, error) => {
  if (error.source) {
    if (error.source.pointer) {
      return error.source.pointer.split('/').pop();
    }

    if (error.source.parameter) {
      return error.source.parameter;
    }
  }

  return index;
};

const mapError = error => ({
  id: error.id,
  links: error.links,
  status: error.status,
  code: error.code,
  title: error.title,
  detail: error.detail,
  meta: error.meta,
});

export default {
  name: 'errors',
  error(payload) {
    if (payload.response) {
      if (payload.response.data && payload.response.data.errors) {
        const errors = {};

        payload.response.data.errors.forEach((error, index) => {
          errors[errorKey(index, error)] = mapError(error);
        });

        return errors;
      }

      return {
        data: {
          title: payload.response.statusText,
        },
      };
    }

    if (payload instanceof Error) {
      return payload;
    }

    return null;
  },
};
