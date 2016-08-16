import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      announcements: this.store.findAll('announcement'),
      rentals: this.store.findAll('rental'),
      cities: this.store.findAll('city')
    });
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    announcementSave3(announcementParams) {
      var newAnnouncement = this.store.createRecord('announcement', announcementParams);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    citySave3(cityParams) {
      var newCity = this.store.createRecord('city', cityParams);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
