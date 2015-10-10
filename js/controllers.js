(function(){
  angular.module('app', [])
    .controller('MyCtrl', function ($scope, $http) {
      $http.get('champions.json').success(function(data){
        $scope.champions = data;
        $scope.championOrder = 'name';
      });
    });
}());

