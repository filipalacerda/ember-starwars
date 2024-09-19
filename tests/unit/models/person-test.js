import { setupTest } from 'starwars/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | person', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('person', {});
    assert.ok(model, 'model exists');
  });
});
