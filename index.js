var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

for(var me in handle){
			console.log("pror: " + me 
				+ " typeof " + (typeof handle[me]));
			
		}


server.start(router.route, handle);