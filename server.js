var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res){
	res.status(200).end();
});




app.post('/getter', function(req, res, next){
    console.log(req.body.url);
    request.get({url: req.body.url, followAllRedirects: true}, function(error, response, body) {

        if (error){
           res.send("Invalid URL");
            return;
        }

        var data = {
            "headers": response.headers,
            "statusCode": response.statusCode,
            "URL": response.request.uri.href
        };

        if(response.request._redirect.redirects){
            data.redirects = response.request._redirect.redirects;
        }
        res.send(data);

    });

});



app.listen(8080);