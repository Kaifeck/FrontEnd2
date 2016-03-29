import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scooter-lyrics', 'Integration | Component | scooter lyrics', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scooter-lyrics}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scooter-lyrics}}
      template block text
    {{/scooter-lyrics}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
