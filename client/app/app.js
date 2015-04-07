'use strict';

angular.module('pollioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'restangular'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    RestangularProvider.setBaseUrl('/api');

    RestangularProvider.setRestangularFields({
      id: '_id'
    });

  });
