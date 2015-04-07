'use strict';

angular.module('pollioApp')
  .controller('CreateCtrl', function ($scope, $state, poll, pollModel) {
    
    if (!pollModel.current) {
    	pollModel.current = poll.create();
    }

    $scope.formData = pollModel.current;

    $scope.$watch('formData.questions', function(questions) {

    	if (questions.length === 0) {
    		$scope.formData.addQuestion();
    	}

    }, true);

    $scope.submit = function() {
    	$state.go('polls.create.add-recipients');
    };


  });
