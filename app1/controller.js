angular.module('myApp').controller('mainCtrl', function($scope, mainService){
      $scope.getTalents = function(){
        $scope.talents = mainService.getTalents();
      }
      $scope.getTalents();
});
