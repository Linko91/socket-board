var app = angular.module('app', ['ngMaterial']);

app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default').primaryPalette('blue');
});

app.controller('appCtrl', function($scope){
	$scope.$watch("inputval", function(newValue, oldValue) {
		console.log(arguments);
		if (newValue != oldValue)
		    window.socket.emit('new val', newValue);
	});
});








$(document).ready(function() {
    $("md-input-container > textarea").textareaAutoSize();
	/*
	window.socket = io('http://socket-board.herokuapp.com:3000');
	socket.on('connect', function(data){
		socket.emit('join', 'Hello World from client');
		console.log(data);
	});
	socket.on('message', function(data) {
		alert(data);
	});
	socket.on('broad', function(data) {
	    var appElement = document.querySelector('[ng-controller="appCtrl"]');
		var $scope = angular.element(appElement).scope();
		$scope.$apply(function() {
			$scope.inputval = data;
			$("md-input-container > textarea").trigger('input');
		});
	});*/
});

