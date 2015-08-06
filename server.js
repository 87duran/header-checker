var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var seochecker = require('seo-checker');
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
})

app.post('/getter', function(req, res, err){
console.log(req.body.url);


	//request.get({uri: req.body.url, time: true})
     //   .on('error', function(err) {
     //       res.send(err);
     //   })
     //   .on('response', function(response){
     //       res.send(response);
     //       console.log(elapsedTime)
	//});


    request({url: req.body.url, followRedirect: true, time: true,}, function(error, response, body) {
        console.log(Object.keys(response));
        res.send(response);
    })
        //.on('error', function(err) {
        //    res.send(err);
        //})
        //.on('response', function(response) {
        //
        //})



});



app.listen(8080);