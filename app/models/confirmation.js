import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', {type: 'email'})
  ]
})

export default DS.Model.extend(Validations, {
  bookingId: DS.attr(),
  email: DS.attr()
});
