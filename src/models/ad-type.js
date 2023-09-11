export default {
  name: 'ad-type',
  attributes: {
    name: '',
    sort: 0,
    'search-landingpages': {
      jsonApi: 'hasOne',
      type: 'search-landingpage',
    },
  },
};
