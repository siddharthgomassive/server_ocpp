const ocpp = require('ocpp');

// Create a WebSocket server
const server = new ocpp.Server({
  port: 9220, // OCPP WebSocket default port
  // Add any other server configuration options here
});

// Handle incoming OCPP connections
server.onConnect = (socket, headers) => {
  console.log('Charge Point connected');

  // Create a Charge Point instance
  const chargePoint = new ocpp.ChargePoint(socket, headers);

  // Implement your logic when a charge point connects
  chargePoint.onBootNotification = (bootNotification) => {
    // Handle boot notification request
  };

  chargePoint.onMeterValues = (meterValues) => {
    // Handle meter values request
  };

  // Add more OCPP message handlers as needed

  chargePoint.connect(); // Connect the charge point
};

// Start the server
server.start().then(() => {
  console.log('WebSocket server started');
}).catch((err) => {
  console.error('WebSocket server error:', err);
});

// ws://your_server_address:9220
