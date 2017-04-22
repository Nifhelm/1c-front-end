var express = require('express');
var vjm = require('vue-jwt-mongo');
var multer = require('multer');

var vjmServer = vjm.Server({
  mongoUrl: 'mongodb://localhost/photofeed',
  jwtSecret: 'MY_SECRET_KEY'
})

var app = express();
var upload = multer({ dest: './uploads'});

app.use(express.static('../client'));

app.post('/auth/register', vjmServer.registerHandler);
app.post('/auth/login', vjmServer.loginHandler);

app.post('/upload', [vjmServer.jwtProtector, upload.single('picture')],
    function(request, response) {
          response.sendStatus(200);
});

app.listen(80);
