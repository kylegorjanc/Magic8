'use strict';
responseApp.controller('ResponseCtrl', ['$http', '$log', ResponseCtrl]) 

function ResponseCtrl($http, $log) {
	$log.info('response-ctrl.js is connected hooray');

	var self = this;
	self.all = [];
	self.addResponse = addResponse;
	self.newResponse = {};
	self.getResponses = getResponses;
	self.deleteResponse = deleteResponse;
	self.editResponse = editResponse;

	self.newText = "";

	function getResponses() {
		$http.get('/responses')
			.then(function successCB(res){
				self.all = res.data;
				$log.log(self.all);
			})
			.catch(function errCB(err){
				$log.error('failure', err);
			});
	}
	getResponses();

	function addResponse(data) {
		console.log(data);
		$http({
		  url: '/responses',
		  method: 'POST',
		  data: {text:data}
		});
		self.newResponse = {};
	};

	function editResponse(id){
		console.log("You're inside the edit function");
		$http.put('/responses/' + id)
			.then(function(res){
				$log.log(res);
			})
			.catch(function(res){
				$log.error('failure', res);
			});
			getResponses();
	};

	function deleteResponse(id) {
		console.log("You're in the delete function");
		$http.delete('/responses/' + id)
			.then(function(res){
				$log.log(res);
			})
			.catch(function(res){
				$log.error('failure', res);
			});
		getResponses();
	}

};
	// function addResponse(data) {
	// 	console.log(data);
	// 	$http({
	// 	  url: '/responses',
	// 	  method: 'POST',
	// 	  data: {text:data}
	// 	});

	// 	// $http.post('/responses')
	// 	// 	.then(function(res){
	// 	// 		// getResponses();
	// 	// 	})
	// 	// 	.catch(function(res) {
	// 	// 		$log.error('failure', res);
	// 	// 	})
		
	// 	self.newResponse = {};
	// };

	// //when we arrive on the page, get all responses and show them.
	// $http.get('/responses')
	// 	.success(function(data) {
	// 		self.responses = data;
	// 		console.log(data);
	// 	})
	// 	.error(function(data) {
	// 		console.log('Error: ' + data);
	// 	});

	// //when we post a new response, send the text to the node API
	// self.createResponse = function() {
	// 	$http.post('/responses', self.formData)
	// 		.success(function(data) {
	// 			self.formData = {}; //clear the form
	// 			self.responses = data;
	// 			console.log(data);
	// 		})
	// 		.error(function(data){
	// 			console.log('Error: ' + data);
	// 		});
	// };


	// //delete a response when it's marked 'done'
	// self.deleteResponse = function(id) {
	// 	$http.delete('/responses/' + id)
	// 		.success(function(data) {
	// 			self.responses = data;
	// 			console.log(data);
	// 		})
	// 		.error(function(data) {
	// 			console.log('Error ' + data);
	// 		});
	// };


