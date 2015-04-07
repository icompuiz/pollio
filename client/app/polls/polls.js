'use strict';

angular.module('pollioApp')
  .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('polls', {
        	parent: 'pollio',
          url: 'polls',
          templateUrl: 'app/polls/polls.html',
          controller: 'PollsCtrl'
        })
        .state('polls.index', {
          url: '/',
          templateUrl: 'app/polls/list.html',
          controller: 'ListPollsCtrl'
        });
    }]);