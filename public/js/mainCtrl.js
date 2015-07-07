var app = angular.module('headerChecker');

app.controller('mainCtrl', function($scope, headerService){

    $scope.headerData = false;

    $scope.getUrlData = function () {
        headerService.getUrlInfo($scope.userUrl)
            .then(function(res){
                console.log(res.data);
                $scope.data = res.data;
                $scope.objKeys = Object.keys($scope.data.headers);
                console.log($scope.objKeys);
                $scope.headerData = true;
                $scope.userUrl = "";
            });

    }


});