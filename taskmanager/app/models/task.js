import DS from 'ember-data';

export default DS.Model.extend({
  //id: DS.attr('number'),
  status: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  //creationDate: DS.attr('date'),
  //lastModified: DS.attr('date'),
  priority: DS.attr()
  //createdBy: DS.belongsTo('person'),
  //handledBy: DS.belongsTo('person')
});
