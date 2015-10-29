var app = angular.module('app', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('blue');
});

app.controller('appCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  }; 
}]);