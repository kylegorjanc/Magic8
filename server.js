var express 	= require('express'),
	app			= express(),
	mongoose	= require('mongoose'), //database middleware
	morgan		= require('morgan'), //logger
	bodyParser	= require('body-parser'), //pull info from HTML POST
 methodOverride	= require('method-override'), //simulate DELETE and PUT methods
 	Response 	= require('./models/response.js');

// configuration
 mongoose.connect('mongodb://localhost/magic8_01');

 app.use(express.static(__dirname + '/public'));	  	//set the location to find static files
 app.use(morgan('dev')); 								//logs all requests to console
 app.use(bodyParser.urlencoded({'extended':'true'}));	//send data x-www-form-urlencoded
 app.use(bodyParser.json());
 app.use(bodyParser.json({type: 'application/vnd.api+json'}));
 app.use(methodOverride());

//app route
app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

 // listen at port
 app.listen(3000);
 console.log("You are looking at a frilled lizard on port 3000");


/////// ROUTING

    // api ---------------------------------------------------------------------


app.get('/responses', function(req, res) {
	console.log('getting!');
	Response.find(function(err, responses) {
		if(err)
		res.send(err)

		res.json(responses);
	});
});

 
// create
app.post('/responses', function(req, res) {
	console.log(req.body);
	console.log(req.body.text);
	// This will get iformation from an AJAX request via Angular
	Response.create({
		text: req.body.text,
		filename: req.body.filename,
		type: req.body.type,
		done: false
	}, function(err, response) {
		if (err) 
			res.send(err);
			console.log(err);

			//return all responses after creation
            Response.find(function(err, responses) {
                if (err)
                    res.send(err)
                res.json(responses);
            });
		console.log('posted!')
	});
}); 

/// UPDATE

app.put('/responses/:id', function(req, res) {
	console.log('getting single response...');
	Response.findByID(id).exec(function(err, response) {
		var params = "text: " + response.text;
		Response.findOneAndUpdate(
			{_id: req.response._id},
			{$set: {params}},
			{"new": true},
			function(err, updated) {
				if (err)
					res.send(err)
				res.send(updated);
			});
	});
});



/// DELETE

app.delete('/responses/:id', function(req, res) {
	Response.remove({
		_id: req.params.id
	}, function(err, response) {
		if(err)
			res.send(err);
		// return all after deletion
		// Response.find(function(err, responses) {
		// 	if(err){
		// 	  res.send(err);
		// 	} else {
		// 	res.json(responses);
		// }
  //       });
	});
	console.log('deletion route')
}); 



