export default {
  name: 'description-video',
  attributes: {
    video_id: '',
    title: '',
    description: '',
    embed_url: '',
    service: '',
    show_in_profile: false,
    is_favorite: false,
    sort: 0,
    thumbnail_url: '',
    company: {
      jsonApi: 'hasOne',
      type: 'company',
    },
  },
};
