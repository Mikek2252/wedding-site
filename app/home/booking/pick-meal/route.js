import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('home.booking');
  },
  redirect(model) {
    return model.get('guests').then(() => {
      if (!model.get('hasResponded')) {
        this.transitionTo('home.booking.guests');
      }
      if (model.get('isEveningOnly')) {
        this.submit();
      }
    });
  }
});
