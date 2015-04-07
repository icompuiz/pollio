'use strict';

angular.module('pollioApp')
  .controller('CreateCtrl', function ($scope, poll) {
    $scope.formData = poll.create();

    $scope.$watch('formData.questions', function(questions) {

    	if (questions.length === 0) {
    		$scope.formData.addQuestion();
    	}

    }, true);
  });
