export default {
  name: 'publication',
  attributes: {
    publish_time: '',
    expire_time: '',
    boost_expire_time: '',
    is_promoted: null,
    geofence: null,
    update_time: null,
    create_time: null,

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
