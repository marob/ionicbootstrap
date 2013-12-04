'use strict';

// A simple controller that shows a tapped item's data
angular.module('ionicbootstrapApp')
  .controller('PetCtrl', function ($scope, $routeParams, Pets) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pet = Pets.get($routeParams.petId);
  });
