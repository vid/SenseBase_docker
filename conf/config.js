// set up logging
var winston = require('winston');

['debug', 'info', 'warn', 'error'].forEach(function(e) {
  GLOBAL[e] = winston[e];
});

var domain = 'localhost',
  namespace = '/sb',
  port = 9999,
  fayemount = namespace + '/faye',
  base = 'http://' + domain + (port ? ':' + port : '') + namespace;
var esOptions ={ _index : 'ps', server : { host : domain, port : 9200 }};
exports.config = {
  loginQuery : "?&size=500",
  HTTP_PORT: port,
  localJS : ':35729/livereload.js',
  namespace: namespace,
  project: 'web',
  FAYEMOUNT: fayemount,
  FAYEHOST: 'http://' + domain + (port ? ':' + port : '') + fayemount,
  ESEARCH: esOptions,
  ESEARCH_URI: 'http://' + esOptions.server.host + ':' + esOptions.server.port + '/' + esOptions._index,
  HOMEPAGE: base + '/',
  AUTH_PORT: port,
  PROXY_PORT: 8089,
  NOCACHE_REGEX: '.*.' + domain,
  uploadDirectory: './uploads',
  doCache : true,
  doAuth: true,
  logStream : { write: function() {}},
  mailer: { 
    transport: { host: 'mail.yourdomain.com', port: 25, ignoreTLS: true },
    from: 'yourname@yourdomain.com',
    subject: 'sensebase watch notifications'
  },
  apis : { bing : '<your bing key>' }
//


//
};
