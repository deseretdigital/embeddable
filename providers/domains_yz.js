var _ = require('lodash');
var when = require('when');
var Provider = require('../provider');

module.exports = [

  Provider.extend({
    name: 'yandex',
    type: 'video',
    uri: "//video\\.yandex\\.ru/users/[^#?/]+/view/.+$",
    version: 0,
    fetch: function(uri) {
      return this.fetchEmbed(uri, {
        api: 'http://video.yandex.ru/oembed.json'
      });
    }
  }),

  Provider.extend({
    name: 'yfrog',
    type: 'rich',
    uri: "//(?:www\\.)?yfrog\\.(us|com)/.+$",
    version: 0,
    fetch: function(uri) {
      return this.fetchEmbed(uri, {
        api: 'http://www.yfrog.com/api/oembed'
      });
    }
  }),

  Provider.extend({
    name: 'youtube',
    type: 'video',
    uri: [
      "//youtube\\.com/[^#?/]+#[^#?/]+/.+$",
      /(youtube\.com|youtu\.be)\/(embed|index|profile|view_play_list|playlist|user|watch|v)/i
    ],
    version: 1,
    fetch: function(uri) {
      var parts;

      // handle embed lookups when doing oembed queries
      if ((parts = uri.match(/embed\/([a-zA-Z0-9-_]+)/i))) {
        uri = 'https://www.youtube.com/watch?v=' + parts[1];
      }
      return this.fetchEmbed(uri, {
        api: 'https://www.youtube.com/oembed'
      });
    }
  })

];
