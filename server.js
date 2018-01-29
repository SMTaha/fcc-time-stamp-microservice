// server.js
// where your node app starts

// init project
var express = require('express');
var path = require('path');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", function (request, response) {
  
 typeof request.params.date  === 'string' ?
  new Date(request.params.date).getTime() > 0 ?
   response.send({
        unix: (new Date(request.params.date)).getTime(),
        natural: (new Date(request.params.date)).toLocaleTimeString("en-us", {year: "numeric", month: "long",  
    day: "numeric",}).split(" ").slice(0, 3).join(' ').slice(0, -1)
      }
  ): response.send({unix: null, natural: null})
  :
  new Date(+request.params.date).getTime() > 0 ?
      response.send({
        unix: (new Date(+request.params.date)).getTime(),
        natural: (new Date(+request.params.date)).toLocaleTimeString("en-us", {year: "numeric", month: "long",  
    day: "numeric",}).slice(0,13)
      }):
      response.send({unix: null, natural: null})
});
app.get("/*", function(request, response) {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
