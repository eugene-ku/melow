import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
   namespace: 'api',
   port: '4030'
});
