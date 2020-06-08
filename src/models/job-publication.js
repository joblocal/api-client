export default {
  name: 'job-publication',
  attributes: {
    status: '',
    job_ad_id: '',
    domain_id: '',
    published_at: '',
    inside_geofence: '',
    expired_at: '',
    created_at: '',
    updated_at: '',

    jobAd: {
      jsonApi: 'hasOne',
      type: 'job-ad',
    },
  },
};
