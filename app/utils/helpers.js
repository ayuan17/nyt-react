// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {
//
  runQuery: function(topic, start, end) {
    console.log(" START YR " + start);
    var apiKey = "65ab10b788244f768e8afed6151f20fc";
    // These variables will hold the results we get from the user's inputs via HTML
    var searchTopic = topic.trim();
    var startYear = start.trim() + "0101";
    var endYear = end.trim() + "1231";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTopic + "&?begin_date=" + startYear + "&?end_date" + endYear + "+&api-key=" + apiKey;

    return axios.get(queryURL, {

    }).then(function(response) {
      // console.log(" RESPONSE " + JSON.stringify(response.data.response.docs[0]));
      return response.data.response.docs;
    });
  },

  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        return results;
      });
  },

  // This function posts new searches to our database.
  postSaved: function(title, date, url) {
    var newArticle = {title: title, date: date, url: url};
    return axios.post("/api/saved", newArticle)
      .then(function(results) {
        return results._id;
      });
  },

  deleteSaved: function(title, date, url) {
    return axios.delete('/api/saved', {
      params: {
        'title': title,
        'data': data,
        'url': url
      }
    })
      .then(function(results) {
        return results;
      });
  }
};

// We export the API helper
module.exports = helper;
