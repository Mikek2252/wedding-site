import DS from 'ember-data';
import {filterBy, empty} from '@ember/object/computed';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  id: validator('presence', true)
})

export default DS.Model.extend(Validations, {
    guests: DS.hasMany('guest'),
    isEveningOnly: DS.attr('boolean'),
    guestsThatAreComing: filterBy('guests', 'isComing', true),
    guestsThatHaveNotResponded: filterBy('guests', 'isComing', null),
    haveResponded: empty('guestsThatHaveNotResponded')
});
