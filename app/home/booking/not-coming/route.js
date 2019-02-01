import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('home.booking');
  },
  redirect(model) {
    if (!model) {
      this.transitionTo('home');
    }
  }
});
