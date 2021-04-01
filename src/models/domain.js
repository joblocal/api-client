export default {
  name: 'domain',
  attributes: {
    name: '',
    identifier: '',
    hostname: '',
    url: '',
    logo_url: '',
    color: '',
    language: '',
    email: '',
    phone: '',
    support_email: '',
    contact_email: '',
    sort_type: '',
    business_contact: null,
    search_radius: [],
    search_radius_default: 0,
    lat: 0,
    lng: 0,
    facebook_app_id: '',
    facebook_verification_id: '',
    network_traffic: null,
    hide_result_count: null,
    show_startpage_video_gallery: null,
    company_slider_auto_rotate: null,
    seo_preview: false,
    use_job_search: true,
    use_extra_boost: true,
    address: {
      street: '',
      zipcode: '',
      city: '',
      state: '',
      country: '',
      lat: 0,
      lng: 0,
    },
    region: {
      id: '',
      name: '',
      title: '',
      title_region: '',
      title_area: '',
      prefixed_title: '',
    },
  },
};
