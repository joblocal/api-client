export default {
  name: 'category',
  attributes: {
    name: '',
    sort: 0,
    'search-landingpages': {
      jsonApi: 'hasOne',
      type: 'search-landingpage',
    },
    subcategories: {
      jsonApi: 'hasMany',
      type: 'subcategory',
    },
  },
};
