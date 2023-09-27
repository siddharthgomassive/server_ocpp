
const WebSocket = require('websocket').server;
const http = require('http');
const ocpp = require('ocpp');

// Create an HTTP server
const server = http.createServer((request, response) => {
  // Handle HTTP requests if needed
});

// Create a WebSocket server
const wsServer = new WebSocket({
  httpServer: server,
  autoAcceptConnections: false,
});

// Handle WebSocket connections
wsServer.on('request', (request) => {
  const connection = request.accept('ocpp1.6', request.origin);
  const chargePoint = new ocpp.ChargePoint(connection, {
    /* Configuration for your charge point */
  });

  chargePoint.onConnect = () => {
    console.log('Charge Point connected');
    // Implement your logic here when a charge point connects.
  };

  chargePoint.onDisconnect = () => {
    console.log('Charge Point disconnected');
    // Implement your logic here when a charge point disconnects.
  };
});

// Start the HTTP server on a specified port
const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
