var http = require("http");
var url = require("url");
var port = process.env.port || 5000

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		    route(handle, pathname, response);
		}
	    http.createServer(onRequest).listen(parseInt(port));
		console.log("Server has started at port " + port);
	}	

exports.start = start;
