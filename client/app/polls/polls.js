'use strict';

angular.module('pollioApp')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('polls', {
                parent: 'pollio',
                url: 'polls',
                template: '<div ui-view=""></div>',
                controller: 'PollsCtrl'
            })
            .state('polls.index', {
                url: '/',
                templateUrl: 'app/polls/list.html',
                controller: 'ListPollsCtrl'
            });
    }]);
