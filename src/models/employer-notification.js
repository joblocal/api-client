export default {
  name: 'employer-notification',
  attributes: {
    user_uuid: '',
    company_id: '',
    type: '',
    schedule: '',
  },
  options: {
    collectionPath: 'notifications/employer',
  },
};
