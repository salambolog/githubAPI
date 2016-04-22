var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var connect = require('connect');
var everyauth = require('everyauth');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.set('view options', {layout: false});
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/',function(req,res) {
  res.render('index');
});

app.listen(process.env.PORT || 8001);
