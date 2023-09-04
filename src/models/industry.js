export default {
  name: 'industry',
  attributes: {
    name: '',
    sort: 0,
    searchLandingpages: {
      jsonApi: 'hasMany',
      type: 'searchLandingpages',
    },
  },
};
