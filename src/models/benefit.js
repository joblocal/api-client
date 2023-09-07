export default {
  name: 'benefit',
  attributes: {
    sort: 0,
    name: '',
    category_id: '',
    title: '',
    'benefit-category': {
      jsonApi: 'hasOne',
      type: 'benefit-category',
    },
  },
};
