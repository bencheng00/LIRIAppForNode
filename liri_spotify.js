var Twitter = require('twitter');
var spotify = require('spotify');
 
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
    console.log("----------------------------------");
	}
  }
});
}
//TWITTER


//SPOTIFY
if (command=="spotify-this-song"){

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
        console.log("----------------------------------");
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
        console.log("----------------------------------");      
    });
}
}
//SPOTIFY


