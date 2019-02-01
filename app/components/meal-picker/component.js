import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';

export default Component.extend({
  guest: null,
  meals: null,
  mealId: oneWay('guest.meal.id'),
  actions: {
    updateMeal(mealId) {
      const selectedMeal = this.get('meals').filter((meal) => {
        return meal.get('id') === mealId;
      })[0];
      this.get('guest').set('meal', selectedMeal);
    }
  }
});
