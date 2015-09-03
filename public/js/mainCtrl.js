var app = angular.module('headerChecker');

app.controller('mainCtrl', function($scope, headerService){

    $scope.headerData = false;

    $scope.getUrlData = function () {

            headerService.getUrlInfo($scope.userUrl)
                .then(function (res) {
                    //this checks for "Invalid URL" denoting a bad URL
                    if(res.data === "Invalid URL") {
                        $scope.badURL = true;
                        $scope.headerData = false;
                        $scope.userUrl = "";
                    } else {
                        //this gives us header info if URL is good
                        $scope.data = res.data;
                        $scope.headerData = true;
                        $scope.badURL = false;
                        $scope.userUrl = "";
                    }
                });
    }


});