import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    announcementSave1() {
      var announcementParams = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('announcementSave2', announcementParams);
    }
  }
});
