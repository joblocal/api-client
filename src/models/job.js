export default {
  name: 'job',
  attributes: {
    title: '',
    description: '',
    display_description: null,
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
    'ad-type': {
      jsonApi: 'hasOne',
      type: 'ad-type',
    },
    category: {
      jsonApi: 'hasOne',
      type: 'category',
    },
    subcategory: {
      jsonApi: 'hasOne',
      type: 'subcategory',
    },
    publications: {
      jsonApi: 'hasMany',
      type: 'publication',
    },
  },
};
