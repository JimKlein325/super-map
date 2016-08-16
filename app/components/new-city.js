import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    citySave1() {
      var cityParams = {
        name: this.get('name'),
        country: this.get('country'),
      };
      this.set('addNewCity', false);
      this.sendAction('citySave2', cityParams);
    }
  }
});
