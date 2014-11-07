var app = angular.module('headerChecker');

app.service('headerService', function($http){
  
    this.getUrlInfo = function (url) {
    return $http.head(url)

    }
  

});