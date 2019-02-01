import DS from 'ember-data';
import {filterBy, empty} from '@ember/object/computed';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  bookingRef: validator('presence', true)
})

export default DS.Model.extend(Validations, {
  bookingRef: DS.attr(),
  guests: DS.hasMany('guest'),
  isEveningOnly: DS.attr(),
  guestsThatAreComing: filterBy('guests', 'isComing', true),
  guestsThatHaveNotResponded: filterBy('guests', 'isComing', null),
  noGuestsAreComing: empty('guestsThatAreComing'),
  hasResponded: empty('guestsThatHaveNotResponded')
});
