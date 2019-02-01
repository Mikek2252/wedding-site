import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('home.booking');
  },
  afterModel(model) {
    model.get('guests').then(() => {
      if (model.get('hasResponded') && !model.get('editBooking')) {
        model.set('editBooking', true);
        this.transitionTo('home.booking.already-checked-in');
      }
    });
    return model;
  },
  redirect(model) {
    if (!model) {
      this.transitionTo('home');
    }
  }
});
