import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['scooterlyric'],
  showLyrics: false,
  actions: {
    lyricShow() {
      this.set('showLyrics', true);
    },
    lyricHide() {
      this.set('showLyrics', false);
    }
  }
});
