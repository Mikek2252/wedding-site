import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('booking', params.id);
  },
  redirect() {
    this.transitionTo('home.booking.guests');
  },
});
