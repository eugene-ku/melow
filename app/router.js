import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MelowENV.locationType
});

Router.map(function() {
  this.resource('playlists', function() {
    this.resource('playlist', {path: ':playlist_id'});
  });  
});

export default Router;
