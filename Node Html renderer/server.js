var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
var fs = require('fs');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(module2.myString);
  module2.myFunction(); /* here we need the parenthesis because we are ex
  ecuting it */
  fs.readFile('./index.html', null , function(error, data) {
    if(error) {
      response.writeHead(404);
      response.write('file not found');
    }
    else {
      response.writeHead(data);
    }
    response.end();
  });

}

http.createServer(onRequest).listen(8000);




/* now we deal with same task but with the anonymous function functionality */
/* http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(module2.myString);
  module2.myFunction();
  response.end();
}).listen(8000); */
