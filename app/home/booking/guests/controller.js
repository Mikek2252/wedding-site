import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  actions: {
    submit() {
      const model = this.get('model');
      const guests = model.get('guests');
      const validatedGuests = guests.map((guest) => {
        return guest.validate().then(({model}) => {
          this.set('showRSVPError', true)
          return model.validations.attrs.isComing.isValid ? RSVP.resolve() : RSVP.reject();
        });
      });

      RSVP.all(validatedGuests).then(() => {
        if (model.get('noGuestsAreComing')) {
          const guestPromises = guests.map((guest) => guest.save());
          RSVP.all(guestPromises).then(() => model.save()).then(() => {
            this.transitionToRoute('home.booking.not-coming', model);
          }).catch(() => {
            this.set('showModelSaveError', true);
          });
        } else {
          if (model.get('isEveningOnly')) {
            const guestPromises = guests.map((guest) => guest.save());
            RSVP.all(guestPromises).then(() => model.save()).then(() => {
              this.transitionToRoute('home.booking.confirmation', model);
            }).catch(() => {
              this.set('showModelSaveError', true);
            });
          } else {
            this.transitionToRoute('home.booking.pick-meal', model);
          }
        }
      });
    }
  }
});
