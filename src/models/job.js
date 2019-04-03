export default {
  name: 'job',
  attributes: {
    title: '',
    description: '',
    display_description: true,
    requirements: null,
    update_time: null,
    create_time: null,
    is_imported: null,
    collective_account: {
      company: null,
      publisher: null,
    },
    application: {
      method: '',
      url: null,
    },
    url_slug: '',
    source: '',
    work_address: {
      street: '',
      zipcode: '',
      city: '',
      state: '',
      country: '',
      lat: 0,
      lng: 0,
    },
    image_url: '',
    domain: {
      jsonApi: 'hasOne',
      type: 'domain',
    },
    publications: {
      jsonApi: 'hasMany',
      type: 'publication',
    },
    company: {
      jsonApi: 'hasOne',
      type: 'company',
    },
    contact: {
      jsonApi: 'hasOne',
      type: 'contact',
    },
    category: {
      jsonApi: 'hasOne',
      type: 'category',
    },
    subcategory: {
      jsonApi: 'hasOne',
      type: 'subcategory',
    },
    'ad-type': {
      jsonApi: 'hasOne',
      type: 'ad-type',
    },
    'job-type': {
      jsonApi: 'hasOne',
      type: 'job-type',
    },
    'contract-type': {
      jsonApi: 'hasOne',
      type: 'contract-type',
    },
    qualification: {
      jsonApi: 'hasOne',
      type: 'qualification',
    },
    'work-experience': {
      jsonApi: 'hasOne',
      type: 'work-experience',
    },
    video: {
      jsonApi: 'hasOne',
      type: 'video',
    },
  },
};
