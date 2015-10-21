angular.module('app', []).controller('ProjectsController', function($scope, $http) {
  var vm = this;
  vm.list = [];
  $http.get('data.json').then(function(result) {
    vm.list = result.data.projects;
  });
});