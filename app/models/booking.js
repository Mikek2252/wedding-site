import DS from 'ember-data';
import {filterBy, empty} from '@ember/object/computed';

export default DS.Model.extend({
    guests: DS.hasMany('guest'),
    isEveningOnly: DS.attr('boolean'),
    guestsThatAreComing: filterBy('guests', 'isComing', true),
    guestsThatHaveNotResponded: filterBy('guests', 'isComing', null),
    haveResponded: empty('guestsThatHaveNotResponded')
});
