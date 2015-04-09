'use strict';

angular.module('pollioApp')
    .controller('PollsCtrl', ['$scope','pollModel', function($scope, pollModel) {
        
        $scope.polls = pollModel.findAll();

    }]);
