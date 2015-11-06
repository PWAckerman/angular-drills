angular.module('parseApp').controller('parseController', function(parseService, $scope){
  $scope.types = ['7/11s','restaurant', 'strip-clubs', 'zoos', 'bars', 'barbershops/salons'];
  $scope.addBiz = function(){
    parseService.postBiz($scope.biz).then(function(res){
      console.log('bizness posted', res);
      $scope.biz = {};
    }, function(err){
      console.log('something bad happened', err)
    });
  };
  $scope.getBiz = function(){
    parseService.getBiz().then(function(res){
      console.log('got biz', res);
      $scope.biznesses = res.data.results
    }, function(err){
      console.log('something bad happened', err)
    })
  }

  $scope.getBiz();
});
