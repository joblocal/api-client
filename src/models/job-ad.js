export default {
  name: 'job-ad',
  attributes: {
    title: '',
    reference_id: '',
    company_id: '',
    contact_id: '',
    created_at: '',
    updated_at: '',
    introduction: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
    salary: '',
    url_slug: '',
    closing_text: '',
    locked: '',
    location: {},
    location_formatted: '',
    application_method: null,
    header_image_id: null,
    canonical_link: null,
    content_order: null,
    import_source: null,
    last_expired_publication_at: null,
    publications: {
      jsonApi: 'hasMany',
      type: 'job-publications',
    },

    professions: {
      jsonApi: 'hasMany',
      type: 'professions',
    },

    qualifications: {
      jsonApi: 'hasMany',
      type: 'qualification',
    },

    employment_types: {
      jsonApi: 'hasMany',
      type: 'employment_types',
    },

    working_times: {
      jsonApi: 'hasMany',
      type: 'working_times',
    },

    contact: {
      jsonApi: 'hasOne',
      type: 'contacts',
    },

    header_image: {
      jsonApi: 'hasOne',
      type: 'media',
    },

    company: {
      jsonApi: 'hasOne',
      type: 'companies',
    },

    pictures: {
      jsonApi: 'hasMany',
      type: 'media',
    },

    videos: {
      jsonApi: 'hasMany',
      type: 'media',
    },
  },
};
