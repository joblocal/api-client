export default {
  name: 'user',
  attributes: {
    salutation: '',
    uuid: '',
    title: '',
    firstname: '',
    lastname: '',
    combined_name: '',
    email: '',
    domain_id: '',
    type: '',
    banned_time: null,
    last_login_time: null,
    companies: {
      jsonApi: 'hasMany',
      type: 'companies',
    },
    domain: {
      jsonApi: 'hasOne',
      type: 'domain',
    },
    domains: {
      jsonApi: 'hasMany',
      type: 'domain',
    },
  },
};
