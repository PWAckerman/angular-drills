angular.module('parseApp').service('parseService', function($http){
  var parseHeaders = {
    "X-Parse-Application-Id": "FFhsApq36xikHlAz276OoAynS9A0UDFDGsMyI2wZ",
    "X-Parse-REST-API-Key": "npgGSyFCVoAq19cQLEct4BpleYy7US6GoOygdbpc",
    "Content-Type": "application/json"
  };

  this.postBiz = function(biz){
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/biznesses',
      data: biz,
      headers: parseHeaders
    })
  }

  this.getBiz = function () {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/biznesses',
      headers: parseHeaders
    })
  }
})
