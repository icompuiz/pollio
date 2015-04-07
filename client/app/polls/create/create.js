'use strict';

angular.module('pollioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls.create', {
        url: '/create',
        templateUrl: 'app/polls/create/create.html',
        controller: 'CreateCtrl'
      });
  });