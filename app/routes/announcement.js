import Ember from 'ember';

export default Ember.Route.extend({
  model(announcementParams) {
    return this.store.findRecord('announcement', announcementParams.announcement_id);
  },
  actions: {
    updateAnnouncement(announcement, announcementParams) {
      Object.keys(announcementParams).forEach(function(key) {
        if(announcementParams[key]!==undefined){
          announcement.set(key,announcementParams[key]);
        }
      });
      announcement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
