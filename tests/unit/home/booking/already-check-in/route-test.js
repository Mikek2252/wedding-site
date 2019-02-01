import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/booking/already-check-in', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/booking/already-check-in');
    assert.ok(route);
  });
});
