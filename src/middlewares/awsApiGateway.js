import qs from 'qs';

const recursiveParamFlatten = (params) => {
  if (params === null) return '';

  Object.keys(params).forEach((key) => {
    let value = params[key] === '' ? undefined : params[key];

    if (typeof value === 'object') value = recursiveParamFlatten(value);
    if (Array.isArray(value) && value.length > 0) value = value.join(',');

    Object.assign(params, { [key]: value });
  });

  return params;
};

const alphabeticalSort = (a, b) => a.localeCompare(b);

export default {
  name: 'aws-api-gateway-param-flatten',
  req: payload => Object.assign(payload, {
    req: {
      ...payload.req,
      paramsSerializer: params => qs.stringify(
        recursiveParamFlatten(params),
        {
          arrayFormat: 'repeat',
          allowDots: true,
          encode: true,
          sort: alphabeticalSort,
        },
      ),
    },
  }),
};
