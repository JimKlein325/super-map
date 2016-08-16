import Ember from 'ember';

export default Ember.Route.extend({
  model(cityParams) {
    return this.store.findRecord('city', cityParams.city_id);
  },
  actions: {
    updateCity(city, cityParams) {
      Object.keys(cityParams).forEach(function(key) {
        if(cityParams[key]!==undefined){
          city.set(key,cityParams[key]);
        }
      });
      city.save();
      this.transitionTo('index');
    },
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});
