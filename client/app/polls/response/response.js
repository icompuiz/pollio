'use strict';

angular.module('pollioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls.response', {
        url: '/responses',
        template: '<div ui-view=""></div>',
        abstract: true
      })
      .state('polls.response.add', {
        url: '/responses/add/:pollid',
        templateUrl: 'app/polls/response/response.html',
        controller: 'ResponseCtrl'
      })
      .state('polls.response.edit', {
        url: '/responses/edit/:pollid/:responseid',
        templateUrl: 'app/polls/response/response.html',
        controller: 'ResponseCtrl'
      });
  });