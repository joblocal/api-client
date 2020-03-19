export default {
  name: 'region-landingpage',
  attributes: {
    slug: '',
    page_title: '',
    welcome_title: '',
    subtitle: null,
    content: '',
    search_params: {
      search: {
        location: '',
      },
      filter: {
        radius: '',
      },
    },
    is_in_footer: false,
    city: '',
    banner_view_url: null,
    file: null,
  },
};
