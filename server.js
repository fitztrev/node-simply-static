var path    = require('path')
  , express = require('express')
  , app     = express()

// Grab the arguments passed via command line
var webroot = process.argv[2]
  , port    = process.argv[3] || 8080

// Make sure webroot path was specified
if ( typeof webroot !== 'undefined' ) {
	// Start the server
	app.use(express.static( webroot )).listen( port )
	console.log('Serving static files from %s on port %d', path.resolve(__dirname, webroot), port)
} else {
	console.error('Error: No path specified')
}
