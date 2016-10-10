var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'oJAkQ8YH2JlGKdoy6Sta0U3I1',
  consumer_secret: 'YwlP2Gh3X2LUraLG4ewmQqaE93oqnZ5SUv1Q6dD2muQylMfQm0',
  access_token_key: '45944329-EErzmSz5TEYI2CXtBmiiqawzbucfOD8Q3Ray8S7V2',
  access_token_secret: 'nCUh5YjypGf2TYqRNzw6gB2rCaPlEhQDhUf7CHg28loUe'
});
 

var command = process.argv[2];
// console.log(command);

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

