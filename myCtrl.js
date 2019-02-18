
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.hello="Hello World";
  
    console.log($scope.hello);
    alert($scope.hello);
});
