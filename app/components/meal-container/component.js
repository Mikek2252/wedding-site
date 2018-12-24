import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  guests: null,
  store: service(),
  init() {
    const meals = this.get('store').findAll('meal')
    this.set('meals', meals);
    this._super(...arguments);
  }
});
