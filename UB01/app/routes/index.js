import Ember from 'ember';

var awesomeHits = [{
  id: 1,
  title: "Hyper, Hyper",
  link: "https://en.wikipedia.org/wiki/Hyper_Hyper",
  lyric: "Hyper, Hyper"
}, {
  id: 2,

  title: "How much is the Fish?",
  link: "https://en.wikipedia.org/wiki/How_Much_Is_the_Fish%3F",
  lyric: "How much is the Fish?"
}, {
  id: 3,
  title: "(Maria) I like it loud",
  link: "https://en.wikipedia.org/wiki/I_Like_It_Loud#Scooter_version",
  lyric: "DÖP, DÖP, DÖP, DÖDÖDÖP, DÖP, DÖP...."
}];
//Comment for Commit
export default Ember.Route.extend({
  model() {
    return awesomeHits;
  }
});
