////////////////////////////////////
/////// REQUIRE MODULE /////////////
////////////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var request = require('request');
var moment = require('moment-timezone');
var _ = require('underscore');
var ustr = require('underscore.string');
_.mixin(ustr.exports());
var path = require('path');
var pjson = require('./package.json');
var consolere = require('console-remote-client').connect('console.re','80','2c09-8025-fd9a');
var io = require('socket.io')();





////////////////////////////////////
/////// SET ROUTE //////////////////
////////////////////////////////////
moment.locale('it');
moment.tz.setDefault("Europe/Rome");

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

console.re.log('remote log init. BOT VERSION: '+pjson.version, process.env);

app.set('port', (process.env.PORT || 5000));
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use('/socket.io', express.static(__dirname + '/node_modules/socket.io-client'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  //res.send('pages/index');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});





io.on('connection', function(socket){
	socket.on('join', function(data){
		console.re.log('socket join: ', data);
		socket.emit('message', 'Hello from server');
	});

	socket.on('new val', function(data) {
        //socket.emit('broad', data);
        socket.broadcast.emit('broad', data);
    });
});
io.listen(3000);


