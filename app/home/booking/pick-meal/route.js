import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return this.modelFor('home.booking');
  },
  redirect(model) {
    return model.get('guests').then(() => {
      if (!model.get('haveResponded')) {
        this.transitionTo('home.booking.guests');
      }
      if (model.get('isEveningOnly')) {
        this.submit();
      }
    });
  },
  submit(booking) {
    const guests = booking.get('guests');
    const guestPromises = guests.map((guest) => {
      return guest.save();
    });
    RSVP.all(guestPromises).then(() => {
      return booking.save();
    }).then(() => {
      this.transitionTo('home.booking.confirmation', booking);
    }).catch((err) => {
      console.log(err);
    });
  },
  actions: {
    submit(booking) {
      this.submit(booking);
    }
  }
});
