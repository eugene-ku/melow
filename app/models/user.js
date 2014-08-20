import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  password: DS.attr(),
  passworConfirmation: DS.attr(),
  email: DS.attr()
});
