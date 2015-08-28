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
})

require('request-debug')(request, function(type, data, r){
    var toLog = {};
    toLog[type] = data;
    if (!toLog.redirect) {
        var returnData = {
            header: toLog.response.headers
        };
        response.send(returnData);
        console.log(returnData);
    }

});


app.post('/getter', function(req, res, err){
    console.log(req.body.url);
    request.get({url: req.body.url}, function(error, response, body) {

        //console.log(response);
        //res.send(response);


    });

});



app.listen(8080);