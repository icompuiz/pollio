'use strict';

angular.module('pollioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls.create', {
        url: '/create',
        template: '<div ui-view=""></div>',
        abstract: true
      })
      .state('polls.create.add-questions', {
        url: '/questions',
        templateUrl: 'app/polls/create/add-questions.html',
        controller: 'CreateCtrl'
      })
      .state('polls.create.add-recipients', {
        url: '/recipients',
        templateUrl: 'app/polls/create/add-recipients.html',
        controller: 'AddRecipientsCtrl'
      });
  });