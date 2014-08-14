import { test, moduleForModel } from 'ember-qunit';

moduleForModel('playlist', 'Playlist', {  
  needs: ['model:track']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
