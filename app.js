
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var Mongoose = require('mongoose');

// The app
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Creating connection and reference to the DB
var db = Mongoose.createConnection('localhost', 'team_steria');
var UserSchema = require('./models/user').UserSchema;
var Users = db.model('users', UserSchema);

Users.update({ name: 'Eirik'}, { name: 'Eirik', sum: 8, activities: [{description: 'Bleieskift', score: 8}] }, {upsert: true}, function (e, u) {});
Users.update({ name: 'Silje'}, { name: 'Silje', sum: 19, activities: [{description: 'Strikkhopping', score: 12}, {description: 'Programmering', score: 7}] }, {upsert: true}, function (e, u) {});
Users.update({ name: 'Magnus'}, { name: 'Magnus', sum: 3, activities: [{description: 'Sykling', score: 3}] }, {upsert: true}, function (e, u) {});

// Defining routes
app.get('/', routes.index(Users));
app.post('/user.json', user.addUser(Users));
app.put('/user.json', user.updateUser(Users));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
