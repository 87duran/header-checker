var app = angular.module('headerChecker');

app.service('headerService', function($http){
  
    this.getUrlInfo = function (url) {
        var prefix = url.substring(0,6);
	    if(prefix !== "http://"){
	    	url = "http://" + url;
        // if(prefix !== "https:/") {
        //   url = "https://" + url;
        // }
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