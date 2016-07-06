var http = require("http");
var url = require("url");


//;(
	function start(route, handle){



	function onRequest(request, response){
			var pathname = url.parse(request.url).pathname;

		 	console.log("Req from " + pathname + " recieved");

			route(handle, pathname);


			response.writeHead(200,{"Content-type": "text/plain"});
			response.write("Hello World");
			response.end();
		}

		http.createServer(onRequest).listen(8888);
		console.log("Server has started");
	}
//)();

exports.start = start;
