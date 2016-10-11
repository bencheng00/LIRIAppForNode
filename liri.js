var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


 
var client = new Twitter({
  consumer_key: 'oJAkQ8YH2JlGKdoy6Sta0U3I1',
  consumer_secret: 'YwlP2Gh3X2LUraLG4ewmQqaE93oqnZ5SUv1Q6dD2muQylMfQm0',
  access_token_key: '45944329-EErzmSz5TEYI2CXtBmiiqawzbucfOD8Q3Ray8S7V2',
  access_token_secret: 'nCUh5YjypGf2TYqRNzw6gB2rCaPlEhQDhUf7CHg28loUe'
});
 

var command = process.argv[2];
// console.log(command);


//TWITTER
if (command=="my-tweets"){
var params = {bencheng00: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i=0;i<20;i++){
    console.log(tweets[i].text);
    console.log(tweets[i].created_at);
    console.log("-----------------------------------------------------------------");
	}
  }
});
}
//TWITTER


//SPOTIFY
else if (command=="spotify-this-song"){

  if (process.argv[3]!=null){
    spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
      if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }
 
      for (var i=0; i<data.tracks.items.length;i++){
        
        console.log("Artist Name: "+data.tracks.items[i].artists[0].name);
        console.log("Song Name: "+data.tracks.items[i].name);
        console.log("Preview: "+data.tracks.items[i].preview_url);
        console.log("Album Name: "+data.tracks.items[i].album.name);
        console.log("------------------------------------------------------------------------------------------");
        }
    });
  }

  else if (process.argv[3]==null) {

    spotify.search({ type: 'track', query: 'the sign' }, function(err, data) {
      if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }       
        console.log("Artist Name: "+data.tracks.items[6].artists[0].name);
        console.log("Song Name: "+data.tracks.items[6].name);
        console.log("Preview: "+data.tracks.items[6].preview_url);
        console.log("Album Name: "+data.tracks.items[6].album.name);
        console.log("------------------------------------------------------------------------------------------");      
      });
    }
}
//SPOTIFY

// OMDB & REQUEST
else if (command=="movie-this"){

    if (process.argv[3]!=null){
        var queryURL = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&tomatoes=true&r=json";

        request(queryURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("Movie Title: " + JSON.parse(body)["Title"]);
                console.log("Year of Release: " + JSON.parse(body)["Year"]);
                console.log("IMDb Rating: " + JSON.parse(body)["imdbRating"]);
                console.log("Country: " + JSON.parse(body)["Country"]);
                console.log("Language(s): " + JSON.parse(body)["Language"]);
                console.log("Plot: " + JSON.parse(body)["Plot"]);
                console.log("Actors: " + JSON.parse(body)["Actors"]);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
                console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
            }
        });
      }

    else if (process.argv[3]==null){
        var queryURL = "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&tomatoes=true&r=json";

        request(queryURL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("Movie Title: " + JSON.parse(body)["Title"]);
                console.log("Year of Release: " + JSON.parse(body)["Year"]);
                console.log("IMDb Rating: " + JSON.parse(body)["imdbRating"]);
                console.log("Country: " + JSON.parse(body)["Country"]);
                console.log("Language(s): " + JSON.parse(body)["Language"]);
                console.log("Plot: " + JSON.parse(body)["Plot"]);
                console.log("Actors: " + JSON.parse(body)["Actors"]);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
                console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
            }
          });
    }
}
// OMDB & REQUEST

