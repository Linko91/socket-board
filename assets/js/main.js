var app = angular.module('app', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default').dark();
});

app.controller('appCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  }; 
}]);