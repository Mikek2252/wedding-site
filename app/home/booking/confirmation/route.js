import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    confirmationEmail(email) {
      const booking = this.modelFor('home.booking');
      const confirmation = this.store.createRecord('confirmation', {
        bookingId: booking.id,
        email
      });
      confirmation.save().then(() => {
        //TODO: Show message
      }).catch(() => {
        //TODO: Show error message
      });
    }
  }
});
