import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://qoj8j8r0x4.execute-api.eu-west-2.amazonaws.com',
  namespace: 'production'
});
