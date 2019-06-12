export default {
  name: 'company',
  id: '',
  attributes: {
    name: '',
    primaryDomain: {
      jsonApi: 'hasOne',
      type: 'domain',
    },
  },
};
