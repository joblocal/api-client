export default {
  name: 'publication',
  attributes: {
    publish_time: '',
    expire_time: '',
    boost_expire_time: '',
    is_promoted: false,
    geofence: null,
    update_time: null,
    create_time: null,
    company: {
      jsonApi: 'hasOne',
      type: 'company',
    },
    job: {
      jsonApi: 'hasOne',
      type: 'job',
    },
    domain: {
      jsonApi: 'hasOne',
      type: 'domain',
    },
  },
};
