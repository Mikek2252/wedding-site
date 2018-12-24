import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(model) {
    model.get('guests');
    return model;
  },
});
