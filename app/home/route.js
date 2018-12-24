import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
export default Route.extend({
  model() {
    return EmberObject.create({
      bookingRef: ''
    });
  },

  actions: {
    findBooking() {
      const bookingRef = this.modelFor(this.routeName).get('bookingRef');
      return this.store.findRecord('booking', bookingRef).then((booking) => {
        this.transitionTo('home.booking.guests', booking);
      });
    }
  }
});
