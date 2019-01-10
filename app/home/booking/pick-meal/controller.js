import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    const meals = this.get('store').findAll('meal')
    this.set('meals', meals);
    this._super(...arguments);
  }
});
