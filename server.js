var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})


// http://127.0.0.1:3000/
  app.listen(3000)