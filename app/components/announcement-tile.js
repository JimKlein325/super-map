import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncement(announcement, announcementParams) {
      this.sendAction('updateAnnouncement', announcement, announcementParams);
    },
    deleteAnnouncement(announcement) {
      this.sendAction('destroyAnnouncement', announcement);
    }
  }
});
