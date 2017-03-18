var express = require("express");
var app = express();

app.get('/random', function(request, response) {
  var lower = Number(request.query.lower);
  var upper = Number(request.query.upper);
  var result = Math.random() * (upper - lower) + lower;

  response.send("" + result);
  });

  app.listen(591);
