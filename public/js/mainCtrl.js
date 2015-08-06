var app = angular.module('headerChecker');

app.controller('mainCtrl', function($scope, headerService){

    $scope.headerData = false;

    $scope.getUrlData = function () {

            headerService.getUrlInfo($scope.userUrl)
                .then(function (res) {
                    //this checks for error denoting a bad URL
                    console.log(res);
                    if(res.data.code) {
                        alert("that URL was not valid")
                    } else {
                        //this gives us header info if URL is good
                        $scope.data = res.data;
                        console.log(res);
                        $scope.body = res.body;
                        $scope.timeMilli = res.elapsedTime;
                        $scope.objKeys = Object.keys($scope.data.headers);
                        console.log($scope.objKeys);
                        $scope.headerData = true;
                        $scope.userUrl = "";
                    }
                });
    }


});