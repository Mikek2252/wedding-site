import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    findBooking() {
      const booking = this.get('model');
      return booking.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          return this.store.findRecord('booking', booking.id).then((booking) => {
            this.transitionToRoute('home.booking.guests', booking);
          }).catch(() => {
            this.set('bookingNotFoundError', true)
          });
        }
      })
    }
  }
});
