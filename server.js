// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", function (request, response) {
  console.log(request.params); 
  new Date(+request.params.date).getTime() > 0 ?
      response.send({
        unix: (new Date(+request.params.date)).getTime(),
        natural: (new Date(+request.params.date)).toLocaleTimeString("en-us", {year: "numeric", month: "long",  
    day: "numeric",}).slice(0,13)
      }):
      response.send({unix: null, natural: null})
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
