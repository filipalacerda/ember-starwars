import { module, test } from 'qunit';
import { setupTest } from 'starwars/tests/helpers';

module('Unit | Service | person', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:person');
    assert.ok(service);
  });
});
