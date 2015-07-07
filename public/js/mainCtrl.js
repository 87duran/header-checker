var app = angular.module('headerChecker');

app.controller('mainCtrl', function($scope, headerService){

    $scope.headerData = false;

    $scope.getUrlData = function () {

        //checks for .com in the URL
        console.log($scope.userUrl.indexOf('.com'));
        if($scope.userUrl.indexOf(".com") === -1) {
            alert("use a proper URL")
        } else {
            headerService.getUrlInfo($scope.userUrl)
                .then(function (res) {
                    console.log(res.data);
                    $scope.data = res.data;
                    $scope.objKeys = Object.keys($scope.data.headers);
                    console.log($scope.objKeys);
                    $scope.headerData = true;
                    $scope.userUrl = "";
                });
        }
    }


});