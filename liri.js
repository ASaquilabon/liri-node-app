//Twitter access
var Twitter = require("twitter");
//twitter keys
var twitterKeysFile = require("./keys.js");
// Action requested
var action = process.argv[2];

var argument = "";


doSomething(action, argument);
function doSomething(action, argument) {
    argument = getThirdArgument();
    switch (action) {
        // Gets list of tweets.
        case "my-tweets":
            getMyTweets();
            break;
// spotify keys 
// Client ID
// d4571f86f6ad43bb87df9f5aff541831
// Client Secret
// f09e495461e24bcea716e2e00b069521
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: d4571f86f6ad43bb87df9f5aff541831,
 secret: f09e495461e24bcea716e2e00b069521
});

spotify
 .search({ type: 'track', query: 'All the Small Things' })
 .then(function(response) {
   console.log(response);
 })
 .catch(function(err) {
   console.log(err);
 });