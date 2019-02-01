import Controller from '@ember/controller';

export default Controller.extend({
  validateBooking() {
    this.set('hasValidBooking', true)
  }
});
