// project/server/peer-server.js
var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
  port: 9000,
  path: '/peerjs',
  ssl: {
    key: fs.readFileSync('/certificates/cert.pem', 'utf8'),
    cert: fs.readFileSync('/certificates/server.crt', 'utf8')
  }
});
// ./../certificates/cert.pem
// ./../certificates/server.crt
