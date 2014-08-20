import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Playlists', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /playlists', function() {
  visit('/playlists');

  andThen(function() {
    equal(currentPath(), 'playlists.index');
  });
});


test('Index', function() {
  expect(3);

  visit('/playlists');

  andThen(function() {
    equal($('.m-playlists li').length, 3);
    equal($('.m-playlists li:first').text(), "red");
    equal($('.m-playlists li:last').text(), "blue");
  });
});
