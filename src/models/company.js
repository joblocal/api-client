export default {
  name: 'company',
  attributes: {
    name: '',
    description: '',
    address: {
      street: '',
      zipcode: '',
      city: '',
      state: '',
      country: '',
      lat: 0,
      lng: 0,
    },
    contact: {},
    logo_list_url: null,
    header_url: null,
    facebook_url: '',
    staffing_services: '',
    external_hrtool: false,
    collective_account: false,
    employees: 0,
    company_is_public: true,
    contacts: {
      jsonApi: 'hasMany',
      type: 'contact',
    },
    'main-contact': {
      jsonApi: 'hasOne',
      type: 'contact',
    },
    industry: {
      jsonApi: 'hasOne',
      type: 'industry',
    },
    benefits: {
      jsonApi: 'hasMany',
      type: 'benefit',
    },
    subscriptions: {
      jsonApi: 'hasMany',
      type: 'subscription',
    },
    domains: {
      jsonApi: 'hasMany',
      type: 'domain',
    },
    'child-companies': {
      jsonApi: 'hasMany',
      type: 'company',
    },
    'parent-company': {
      jsonApi: 'hasOne',
      type: 'company',
    },
    'primary-domain': {
      jsonApi: 'hasOne',
      type: 'domain',
    },
  },
};
