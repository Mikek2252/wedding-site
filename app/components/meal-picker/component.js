import Component from '@ember/component';

export default Component.extend({
  guest: null,
  meals: null,
  actions: {
    updateMeal(mealId) {
      const selectedMeal = this.get('meals').filter((meal) => {
        return meal.get('id') === mealId;
      })[0];
      this.get('guest').set('meal', selectedMeal);
    }
  }
});
