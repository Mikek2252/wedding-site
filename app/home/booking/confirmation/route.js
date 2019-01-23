import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const booking = this.modelFor('home.booking');
    const confirmation = this.store.createRecord('confirmation', {
      bookingId: booking.id
    });
    return confirmation
  }
});
