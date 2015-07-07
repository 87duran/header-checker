var app = angular.module('headerChecker');

app.service('headerService', function($http){
  
    this.getUrlInfo = function (url) {
        //this checks for valid URL
        var prefix = url.substring(0,7);
	    if(prefix !== "http://" && prefix !== "https:/"){
	    	url = "http://" + url;
	    }
        return $http({
            method: 'POST',
            url: '/getter',
            data: {url: url}
        }).then(function(res){
            console.log("got response");
            return res;
        })
    }

});