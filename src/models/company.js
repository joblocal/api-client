export default {
  name: 'company',
  id: '',
  attributes: {
    domain_id: '',
    name: '',
    description: null,
    publication_count: 0,
    address: null,
    logo_list_url: null,
    logo_profile_url: null,
    employer_branding_profile_url: null,
    phone: null,
    fax: null,
    website_url: null,
    facebook_url: null,
    staffing_services: '',
    external_hrtool: false,
    collective_account: false,
    employees: null,
    banner_exclusive_url: null,
    banner_region_url: null,
    banner_instructor_url: null,
    logo_profile_fb_url: null,
    company_is_public: false,
    domains: {
      jsonApi: 'hasMany',
      type: 'domain',
    },
    primaryDomain: {
      jsonApi: 'hasOne',
      type: 'domain',
    },
    subscriptions: {
      jsonApi: 'hasMany',
      type: 'subscription',
    },
    contacts: {
      jsonApi: 'hasMany',
      type: 'contact',
    },
    industry: {
      jsonApi: 'hasOne',
      type: 'industry',
    },
    'parent-company': {
      jsonApi: 'hasOne',
      type: 'company',
    },
    'child-companies': {
      jsonApi: 'hasMany',
      type: 'company',
    },
    'main-contact': {
      jsonApi: 'hasOne',
      type: 'contact',
    },
    benefits: {
      jsonApi: 'hasMany',
      type: 'benefit',
    },
    'active-flatrates': {
      jsonApi: 'hasMany',
      type: 'active-flatrate',
    },
  },
};
