import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('booking', params.id);
  },
  afterModel(model) {
    this.controllerFor('home').validateBooking();
    return model;
  },
  redirect(model) {
    if (!model) {
      this.transitionTo('home');
    }
  },
});
