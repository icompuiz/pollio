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
        controller: 'AddQuestionsCtrl'
      })
      .state('polls.create.add-recipients', {
        url: '/recipients',
        templateUrl: 'app/polls/create/add-recipients.html',
        controller: 'AddRecipientsCtrl'
      });

    $stateProvider
      .state('polls.edit', {
        url: '/edit',
        template: '<div ui-view=""></div>',
        abstract: true
      })
      .state('polls.edit.add-questions', {
        url: '/questions/:id',
        templateUrl: 'app/polls/create/add-questions.html',
        controller: 'AddQuestionsCtrl'
      })
      .state('polls.edit.add-recipients', {
        url: '/recipients/:id',
        templateUrl: 'app/polls/create/add-recipients.html',
        controller: 'AddRecipientsCtrl'
      });
  });