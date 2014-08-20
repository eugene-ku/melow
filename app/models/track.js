import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  title: DS.attr(),
  url: DS.attr(),
  duration: DS.attr('time'),
  cover: DS.attr(),
  totalVotes: DS.attr('number'),
  userVote: DS.attr('number'),
  playlist: DS.belongsTo('playlist')
});
