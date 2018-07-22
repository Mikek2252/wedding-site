import DS from 'ember-data';

export default DS.Model.extend({
    postcode: DS.attr('string'),
    isComing: DS.attr('boolean')
});
