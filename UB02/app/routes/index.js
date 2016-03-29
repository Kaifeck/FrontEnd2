import Ember from 'ember';

//Comment for Commit
export default Ember.Route.extend({
  model() {
    return this.store.findAll('hit');
  }
});
