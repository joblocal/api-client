export default {
  name: 'top-job',
  attributes: {
    publication_id: '',
    domain_id: '',
    start_at: '',
    end_at: '',
    duration: '',
    price: '',
    created_at: '',
    updated_at: '',

    company: {
      jsonApi: 'hasOne',
      type: 'companies',
    },

    jobAd: {
      jsonApi: 'hasOne',
      type: 'job-ad',
    },
  },
};
