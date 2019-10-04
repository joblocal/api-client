export default {
  name: 'user',
  attributes: {
    salutation: '',
    uuid: '',
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    domain_id: '',
    type: '',
    banned_time: null,
    companies: {
      jsonApi: 'hasMany',
      type: 'companies',
    },
  },
};
