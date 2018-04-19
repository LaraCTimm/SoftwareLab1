//// WITHOUT ABOUT /////////////////////////////////////
/*
var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.listen(3000);
console.log("Express server running on port 3000");
*/

//// WITH ABOUT /////////////////////////////////////////
/*
var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.listen(3000);
console.log("Express server running on port 3000");
*/

// WITH ROUTER ///////////////////////////////////////////
/*
var path = require('path');
var express = require('express');
var app = express();
var mainRouter = express.Router();

mainRouter.get('/', function(req, res) {
    res.send("Hello World");
});

mainRouter.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.use('/', mainRouter);
app.listen(3000);
console.log("Express server running on port 3000");
*/

// USING MAINROUTES.JS ////////////////////////////////////

var path = require('path');
var express = require('express');
var app = express();
var mainRouter = require('./mainRoutes')

app.use('/', mainRouter);
app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");

