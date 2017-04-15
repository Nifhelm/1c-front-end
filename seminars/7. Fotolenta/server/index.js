var express = require('express');
var vjm = require('vue-jwt-mongo')
var vjmServer = vjm.Server({
  mongoUrl: 'mongodb://localhost/photofeed',
  jwtSecret: 'MY_SECRET_KEY'
})

var app = express();

app.use(express.static('../client'));

app.post('/auth/register', vjmServer.registerHandler);


app.listen(80);
