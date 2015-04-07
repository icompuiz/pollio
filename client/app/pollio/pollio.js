'use strict';

angular.module('pollioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pollio', {
        url: '/',
        templateUrl: 'app/pollio/pollio.html',
        controller: 'PollioCtrl'
      });
  });