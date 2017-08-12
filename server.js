var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vdn.api+json'}));

require("./app/routing/api-routes.js");

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, 'app/public/home.html'));
});
 
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});