'use strict';
Magic8App.controller('ResponseCtrl', ['$http', '$log', ResponseCtrl]) 

function ResponseCtrl($http, $log) {
	$log.info('response-ctrl.js is connected hooray');

	var self = this;
	self.all = [];
	self.getResponse = getResponse;
	self.currentResponse = {};
	self.getAllResponses = getAllResponses;
	self.newText = "";

	function getResponse() {
		shakeBall();
		
	}

	function shakeBall(e) {
		document.getElementById("ball").setAttribute("style", "animation: shake 2s");
		document.getElementById("response-triangle").removeAttribute("style", "animation: fadeIn 5s;");
		document.getElementById("response-triangle").setAttribute("style", "animation: fadeOut 3s;");
		newResponse(e);
	};

	function newResponse(e) {
		
		// setTimeout(function(){
			var allResponses = self.all;
			self.currentResponse = allResponses[Math.floor(Math.random() * allResponses.length)];
			console.log(self.currentResponse.text);
			self.currentText = self.currentResponse.text;
			document.getElementById("response-triangle").setAttribute("style", "animation: fadeIn 5s;")
		e.preventDefault();
		// }, 3000);
	}


//  This function is for the response list at the bottom of the page
	function getAllResponses() {
		$http.get('/responses')
			.then(function successCB(res){
				self.all = res.data;
				$log.log(self.all);
			})
			.catch(function errCB(err){
				$log.error('failure', err);
			});
	}
	getAllResponses();








// The following functions were created solely for administrative changes to the response database. They are not designated for user functionality.
	self.addResponse = addResponse;
	self.newResponse = {};
	self.deleteResponse = deleteResponse;
	self.editResponse = editResponse;


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
			getAllResponses();
	};

	function deleteResponse(id) {
		console.log("Hopefully nobody ever deletes a response.");
		$http.delete('/responses/' + id)
			.then(function(res){
				$log.log(res);
			})
			.catch(function(res){
				$log.error('failure', res);
			});
		getAllResponses();
	}

};


