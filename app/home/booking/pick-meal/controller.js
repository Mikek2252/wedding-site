import Controller from '@ember/controller';
import { or } from '@ember/object/computed';
import RSVP from 'rsvp';
import DS from 'ember-data';

export default Controller.extend({
  init() {
    const meals = this.get('store').findAll('meal')
    this.set('meals', meals);
    this._super(...arguments);
  },
  actions: {
    submit() {
      const booking = this.get('model');
      const guestsThatAreComing = booking.get('guestsThatAreComing');
      const validatedGuests = guestsThatAreComing.map((guest) => {
        return guest.validate().then(({ validations }) => {
          this.set('showMealError', true)
          return validations.isValid ? RSVP.resolve() : RSVP.reject();
        });
      });
      const guests = booking.get('guests');
      RSVP.all(validatedGuests).then(() => {
        const guestPromises = guests.map((guest) => guest.save());
        const savePromises = RSVP.all(guestPromises).then(() => booking.save()).then(() => {
          this.transitionToRoute('home.booking.confirmation', booking);
        }).catch(() => {
          this.set('showModelSaveError', true);
        });
        this.set('savePromises', DS.PromiseObject.create(savePromises));
      });
    }
  },
  isPending: or('meals.isPending', 'savePromises.isPending')
});
