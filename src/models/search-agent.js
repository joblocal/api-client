export default {
  name: 'search-agent',
  attributes: {
    email: '',
    query: null,
    location: null,
    lat: null,
    lng: null,
    radius: null,
    user_id: null,
    adTypes: {
      jsonApi: 'hasMany',
      type: 'ad-type',
    },
    companies: {
      jsonApi: 'hasMany',
      type: 'company',
    },
    contractTypes: {
      jsonApi: 'hasMany',
      type: 'contract-type',
    },
    educations: {
      jsonApi: 'hasMany',
      type: 'education',
    },
    industries: {
      jsonApi: 'hasMany',
      type: 'industry',
    },
    jobCategories: {
      jsonApi: 'hasMany',
      type: 'category',
    },
    jobSubCategories: {
      jsonApi: 'hasMany',
      type: 'subcategory',
    },
    jobTypes: {
      jsonApi: 'hasMany',
      type: 'job-type',
    },
    workExperiences: {
      jsonApi: 'hasMany',
      type: 'work-experience',
    },
  },
};
