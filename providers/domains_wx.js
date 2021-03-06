var _ = require('lodash');
var when = require('when');
var Provider = require('../provider');

module.exports = [

  Provider.extend({
    name: 'wistia',
    type: "video",
    uri: "(wistia.com|wi.st)/(m|embed)/.+",
    version: 0,
    fetch: function(uri) {
      return this.fetchEmbed(uri, {
        api: 'http://fast.wistia.com/oembed.json'
      });
    }
  }),

  Provider.extend({
    name: "wordpress",
    type: "rich",
    uri: [
      "wordpress\\.(com|tv)/.+",
      "blogs\\.cnn\\.com/.+",
      "techcrunch\\.com/.+",
      "wp\\.me/.+"
    ],
    version: 0,
    fetch: function(uri) {
      return this.fetchEmbed(uri, {
        api: "public-api.wordpress.com/oembed/1.0/"
      });
    }
  })

];
