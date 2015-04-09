'use strict';

angular.module('pollioApp')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('polls', {
                parent: 'pollio',
                url: 'polls',
                template: '<div ui-view=""></div>',
            })
            .state('polls.list', {
                url: '/',
                templateUrl: 'app/polls/polls.html',
                controller: 'PollsCtrl'
            });
    }]);
