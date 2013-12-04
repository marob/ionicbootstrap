'use strict';

// A simple controller that fetches a list of data
angular.module('ionicbootstrapApp')
  .controller('PetsTabCtrl', function ($scope, Pets) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = Pets.all();

    $scope.$on('tab.shown', function () {
      // Might do a load here
    });
    $scope.$on('tab.hidden', function () {
      // Might recycle content here
    });
  });