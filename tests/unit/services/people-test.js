import { module, test } from 'qunit';
import { setupTest } from 'starwars/tests/helpers';

module('Unit | Service | people', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:people');
    assert.ok(service);
  });
});
