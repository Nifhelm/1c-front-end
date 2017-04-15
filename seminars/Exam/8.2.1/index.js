var express = require("express");
var app = express();

app.get('/random', function(request, response) {
  var kniga1 = Фронт без линии фронта
  var kniga2 = Отель «У Погибшего Альпиниста»
  var kniga3 = Хороший человек

  var result = kniga1 + kniga2 + kniga3

  response.send("" + result);
  });

  app.listen(591);
