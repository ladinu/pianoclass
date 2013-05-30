var spawn = require('child_process').spawn;
var http  = require('http');
var url   = require('url');
var fs    = require('fs');

var server = http.createServer(function(req, res){

  if (req.url === '/start') {
    fs.createReadStream("./index.html").pipe(res);

  } else if (req.url === '/favicon.ico') {
    res.end();
  } else {
    var note = url.parse(req.url).query;
    spawn("say", [note]);
    res.end();
  }

});

server.listen(8080);
console.log("> Listening on 8080...")
