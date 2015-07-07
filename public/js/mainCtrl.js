var app = angular.module('headerChecker');

app.controller('mainCtrl', function($scope, headerService){

    $scope.headerData = false;

    $scope.getUrlData = function () {

        //checks for .com in the URL
        console.log($scope.userUrl.indexOf('.com'));
            headerService.getUrlInfo($scope.userUrl)
                .then(function (res) {
                    //this checks for error denoting a bad URL
                    console.log(res.data);
                    if(res.data.code) {
                        alert("that URL was not valid")
                    }
                    //this gives us header info if URL is good
                    $scope.data = res.data;
                    $scope.objKeys = Object.keys($scope.data.headers);
                    console.log($scope.objKeys);
                    $scope.headerData = true;
                    $scope.userUrl = "";
                });
    }


});