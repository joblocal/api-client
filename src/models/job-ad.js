export default {
  name: 'job-ad',
  attributes: {
    status: null,
    title: '',
    url_slug: '',
    introduction: null,
    responsibilities: null,
    requirements: null,
    salary: null,
    location: null,
    benefits: null,
    closing_text: null,
    last_expired_publication_at: null,
    created_at: '',
    updated_at: '',
    application_method: null,
    locked: false,
    locked_by: null,
    import_source: null,
    use_template: null,

    'job-publications': {
      jsonApi: 'hasMany',
      type: 'job-publications',
    },

    working_times: {
      jsonApi: 'hasMany',
      type: 'working_times',
      meta: {
        hours_per_week: null,
      },
    },

    employment_types: {
      jsonApi: 'hasMany',
      type: 'employment_types',
    },

    qualifications: {
      jsonApi: 'hasMany',
      type: 'qualifications',
    },

    company: {
      jsonApi: 'hasOne',
      type: 'companies',
    },

    contact: {
      jsonApi: 'hasOne',
      type: 'contacts',
    },

    header_image: {
      jsonApi: 'hasOne',
      type: 'media',
    },
  },
};
