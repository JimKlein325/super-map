import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    updateAnnouncement(announcement) {
      var announcementParams = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('updateAnnouncement', announcement, announcementParams);
    }
  }
});
