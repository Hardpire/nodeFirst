function route(handle, pathname) {
	console.log("About to rote a request for \'" + pathname + "\'");

	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("not a function \n\n\n");
		for(var me in handle){
			console.log("pror: " + me 
				+ " typeof " + (typeof handle[me]));
			
		}
	}
}

exports.route = route;