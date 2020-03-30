export default {
  name: 'job-publication',
  attributes: {
    job_ad_id: '',
    domain_id: '',
    created_at: '',
    updated_at: '',
    published_at: '',
    expired_at: '',
    company: {
      jsonApi: 'hasOne',
      type: 'company',
    },
  },
};
