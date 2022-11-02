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
    use_new_jobmanagement: false,
    'active-flatrates': {
      jsonApi: 'hasMany',
      type: 'active-flatrate',
    },
    benefits: {
      jsonApi: 'hasMany',
      type: 'benefit',
    },
    'child-companies': {
      jsonApi: 'hasMany',
      type: 'company',
    },
    contacts: {
      jsonApi: 'hasMany',
      type: 'contact',
    },
    domains: {
      jsonApi: 'hasMany',
      type: 'domain',
    },
    employers: {
      jsonApi: 'hasMany',
      type: 'user',
    },
    industry: {
      jsonApi: 'hasOne',
      type: 'industry',
    },
    jobs: {
      jsonApi: 'hasMany',
      type: 'job',
    },
    'main-contact': {
      jsonApi: 'hasOne',
      type: 'contact',
    },
    'parent-company': {
      jsonApi: 'hasOne',
      type: 'company',
    },
    primaryDomain: {
      jsonApi: 'hasOne',
      type: 'domain',
    },
    publications: {
      jsonApi: 'hasMany',
      type: 'publication',
    },
    socialMediaLinks: {
      jsonApi: 'hasMany',
      type: 'social-media-link',
    },
    subscriptions: {
      jsonApi: 'hasMany',
      type: 'subscription',
    },
  },
};
