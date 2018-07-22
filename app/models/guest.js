import DS from 'ember-data';

export default DS.Model.extend({
    booking: DS.belongsTo(),
    meal: DS.belongsTo()
});
