export default {
  name: 'search-job',
  attributes: {
    jobs: {
      jsonApi: 'hasMany',
      type: 'search-job-result',
    },
    'facet-employment-types': {
      jsonApi: 'hasMany',
      type: 'facet-employment-type',
    },
    'facet-qualifications': {
      jsonApi: 'hasMany',
      type: 'facet-qualification',
    },
    'facet-working-times': {
      jsonApi: 'hasMany',
      type: 'facet-working-time',
    },
    'facet-companies': {
      jsonApi: 'hasMany',
      type: 'facet-company',
    },
    'facet-industries': {
      jsonApi: 'hasMany',
      type: 'facet-industry',
    },
    'facet-employees': {
      jsonApi: 'hasMany',
      type: 'facet-employee',
    },
    'facet-location-types': {
      jsonApi: 'hasMany',
      type: 'facet-location-type',
    },
    sort: '',
  },
};
