import { module, test } from 'qunit';
import { setupTest } from 'starwars/tests/helpers';

module('Unit | Route | people', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:people');
    assert.ok(route);
  });
});
