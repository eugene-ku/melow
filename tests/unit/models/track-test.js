import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';
// import App from 'app';

moduleForModel('track', 'Track', {  
  needs: ['model:playlist']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('belongsTo playlist relationship', function() {
  var relationships = Ember.get(this.store().modelFor('track'), 'relationshipsByName');
  equal(relationships.get('playlist').kind, 'belongsTo');
});
