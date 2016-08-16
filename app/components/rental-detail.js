import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      this.sendAction('destroyRental', rental);
    }
  }
});
