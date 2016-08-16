import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    updateCity(city, cityParams) {
      this.sendAction('updateCity', city, cityParams);
    },
    deleteCity(city) {
      this.sendAction('destroyCity', city);
    }
  }

});
