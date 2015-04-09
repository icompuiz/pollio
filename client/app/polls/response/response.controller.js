'use strict';

angular.module('pollioApp')
    .controller('ResponseCtrl', function($scope, $state, $stateParams, pollModel, poll, pollQuestionAnswerRespose) {

    	$scope.submit = function() {

    		console.log($scope.responses);

    	};

        $scope.$on('$stateChangeStart', function(event, to, toParams) {

            if (!/polls.edit/.test(to.name) && !/polls.create/.test(to.name)) {
                pollModel.current = null;
            }

        });

        if ($stateParams.pollid) {
            $scope.currentPoll = pollModel.findById($stateParams.pollid);
        }

        if (!$scope.currentPoll) {
            return $state.go('polls.list');
        }

        $scope.responses = {};

        _.forEach($scope.currentPoll.questions, function(question) {

            var response = pollQuestionAnswerRespose.create();

            $scope.responses[question._id] =  response;

        });

    });
