'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array or 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionicbootstrapApp', ['ionic', 'ngRoute', 'ngAnimate'])

  .config(function ($compileProvider) {
    // Needed for routing to work
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', { templateUrl: 'views/app.html', controller: 'AppCtrl'})
      .when('/pet/:petId', {templateUrl: 'views/pet.html', controller: 'PetCtrl'})
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({redirectTo: '/home'});
  });

