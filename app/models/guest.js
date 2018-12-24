import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  booking: DS.belongsTo(),
  dietaryRequirements: DS.attr('string'),
  isComing: DS.attr(''),
  meal: DS.belongsTo(),

});
