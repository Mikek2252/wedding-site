import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  isComing: validator('presence', true),
  'meal.id': validator('presence', true, {
    message: 'Please select an option.'
  })
})


export default DS.Model.extend(Validations, {
  name: DS.attr('string'),
  booking: DS.belongsTo(),
  dietaryRequirements: DS.attr('string'),
  isComing: DS.attr(),
  meal: DS.belongsTo(),

});
