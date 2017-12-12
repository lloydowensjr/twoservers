// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;

// Create a generic function to handle requests and responses
function somethingGood(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are amazing" );
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(somethingGood);

// Start our server so that it can begin listening to client requests.
server.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});



// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function somethingBad(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You make my stomach hurt" );
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(somethingBad);

// Start our server so that it can begin listening to client requests.
server.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});