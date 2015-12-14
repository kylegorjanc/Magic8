var express		= require('express'),
	app			= express(),
	mongoose	= require('mongoose'), //db 
	morgan		= require('morgan'), //logs
	bodyParser	= require('body-parser'), //pull info from $html POST
methodOverride	= require('method-override'), //simulate DELETE and PUT
	article		= require('./articles/article.js')

mongoose.connect('/http://www.saltyrunning.com/data/');

app.use(express.static(__dirname + '/public')); 		//use /public/ to find static pages
app.use(morgan('dev'));									//logs all requests to console.
app.use(bodyParser.urlencoded({'extended':'true'})); 	//send data x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

//main route
app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

//listen at port 
app.listen(3000);
console.log("Outlook good that you are listening on port 3000...");

