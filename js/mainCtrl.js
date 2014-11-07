var app = angular.module('headerChecker');

app.controller('mainCtrl', function($scope, headerService){

$scope.userUrl;

$scope.getUrlData = function () {
  headerService.getUrlInfo($scope.userUrl);
}



      
});