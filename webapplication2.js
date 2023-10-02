var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Never give up on the DREAMS you hold dear.\n Keep doing your BEST and NEW paths will appear.\n Remember persistence; it goes with success.\n like a king with a Queen in the great game of chess.')
}).listen(7777)

// Console will print the message
console.log('Server running')