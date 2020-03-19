export default {
  name: 'search-landingpage',
  attributes: {
    name: '',
    slug: '',
    link_title: '',
    page_title: '',
    headline: '',
    tagline: null,
    breadcrumb: '',
    search_params: {
      search: {
        query: '',
        location: '',
      },
      filter: {
        job_category: '',
        job_subcategory: '',
        job_type: '',
        ad_type: '',
        contract_type: '',
        work_experience: '',
        company_industry: '',
        education: '',
        is_promoted: '',
      },
      sort: '',
    },
    directory: '',
    meta: {
      description: null,
      robots: null,
      keywords: null,
    },
  },
};
