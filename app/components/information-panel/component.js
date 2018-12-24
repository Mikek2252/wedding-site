import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  locations: computed(function () {
    return [{
      lat: 1,
      lng: 2
    }];
  })
});
