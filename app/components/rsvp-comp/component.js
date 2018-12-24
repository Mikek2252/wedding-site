import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  guest: null,
  name: computed('guest.id', function () {
    const id = this.get('guest.id');
    return `rsvp${id}`;
  })
});
